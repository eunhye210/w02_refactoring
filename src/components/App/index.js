import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import Container from "../shared/Container";
import { searchYoutube } from "../../api/youtube";
import { debounce } from "lodash";

const Main = styled.main`
  margin-top: 110px;
`;


export default function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [pageToken, setPageToken] = useState("");
  const [isReLoading, setIsReLoading] = useState(false);
  const [items, setItems] = useState([]);

  const load = async () => {
    console.log(isReLoading);
    if (isReLoading) {
      setItems([]);
      setPageToken("");
    }
    const res = await searchYoutube(searchKeyword, pageToken);

    setPageToken(res.nextPageToken);
    setItems([...items, ...res.items]);
    setIsReLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.addEventListener("scroll", scroll);
    }
  })

  const scroll = debounce(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollHeight - 100 < scrollTop + clientHeight) {
      load();
    }
  }, 200);


  return (
    <>
      <AppHeader
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        load={load}
        setIsReLoading={setIsReLoading}
      />
      <Main>
        <Container>
          <Routes>
            <Route path="/videos" element={<VideoList items={items} load={load} />} />
            {/* <Route path="/videos/:videoId" element={<VideoInfos videoInfos={items} />} /> */}
            <Route path="/" element={<Navigate to="/videos" replace />} />
          </Routes>
        </Container>
      </Main>
    </>
  );
}
