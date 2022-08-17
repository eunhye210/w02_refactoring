import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import VideoList from "../VideoList";
import VideoInfos from "../Modal/videoInfo";
import AppHeader from "../AppHeader";
import Container from "../shared/Container";
import { searchYoutube } from "../../api/youtube";
import { debounce } from "lodash";

const Main = styled.main`
  margin-top: 110px;
`;

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [pageToken, setPageToken] = useState(""); // searchkeyword랑 pagetoken 하나에서 관리
  const [isReLoading, setIsReLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const test = async () => {
      if (!isReLoading) return;
      const res = await searchYoutube(searchKeyword, pageToken);
      setPageToken(res.nextPageToken);
      setItems([...items, ...res.items]);
      setIsReLoading(false);
    }

    test();
  }, [isReLoading]);

  useEffect(() => {
    window.addEventListener("scroll", triggerScroll);
    return () => {
      window.addEventListener("scroll", triggerScroll);
    }
  })

  const triggerScroll = debounce(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollHeight - 100 < scrollTop + clientHeight) {
      setIsReLoading(true);
    }
  }, 200);


  return (
    <>
      <AppHeader
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        setItems={setItems}
        setIsReLoading={setIsReLoading}
        setPageToken={setPageToken}
      />
      <Main>
        <Container>
          <Routes>
            <Route path="/videos" element={<VideoList items={items} />} />
            <Route path="/videos/:videoId" element={<VideoInfos videoInfos={items} />} />
            <Route path="/" element={<Navigate to="/videos" replace />} />
          </Routes>
        </Container>
      </Main>
    </>
  );
}
