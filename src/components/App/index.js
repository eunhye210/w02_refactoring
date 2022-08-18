import React, { useEffect, useState, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import VideoList from "../VideoList/index";
import AppHeader from "../AppHeader/index";
import Container from "../shared/Container";
import { searchYoutube } from "../../api/youtube";
import { throttle } from "lodash";

const Main = styled.main`
  margin-top: 110px;
`;

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [pageToken, setPageToken] = useState("");
  const [isReLoading, setIsReLoading] = useState(true);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const test = async () => {
      const res = await searchYoutube(searchKeyword, pageToken);

      setPageToken(res.nextPageToken);
      setItems([...items, ...res.items]);
    }

    test();
  }, [isReLoading]);

  useEffect(() => {
    window.addEventListener("scroll", triggerScroll);
    return () => {
      window.addEventListener("scroll", triggerScroll);
    }
  }, []);

  const triggerScroll = useCallback(throttle(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    
    setIsReLoading(scrollHeight - 150 < scrollTop + clientHeight);
  }, 300), []);

  return (
    <>
      <AppHeader
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        setPageToken={setPageToken}
        setItems={setItems}
        setIsReLoading={setIsReLoading}
      />
      <Main>
        <Container>
          <Routes>
            <Route path="/videos" element={<VideoList items={items} />} />
            <Route path="/videos/:videoId" element={<VideoList items={items} />} />
            <Route path="/" element={<Navigate to="/videos" replace />} />
          </Routes>
        </Container>
      </Main>
    </>
  );
}
