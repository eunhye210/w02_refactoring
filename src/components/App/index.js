import React, { useEffect, useState, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { throttle } from "lodash";
import styled from "styled-components";
import VideoList from "../VideoList/index";
import AppHeader from "../AppHeader/index";
import Container from "../shared/Container";
import useModal from "../hooks/useModal";
import { searchYoutube } from "../../api/youtube";

const Main = styled.main`
  margin-top: 110px;
`;

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [pageToken, setPageToken] = useState("");
  const [youtubeData, setYoutubeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { openModal, closeModal } = useModal();

  useEffect(() => {
    if (!isLoading) return;

    const getYoutubeData = async () => {
      const res = await searchYoutube(searchKeyword, pageToken);

      setPageToken(res.nextPageToken);
      setYoutubeData([...youtubeData, ...res.items]);
    }

    getYoutubeData();
  }, [isLoading]);

  useEffect(() => {
    window.addEventListener("scroll", triggerScroll);
    return () => {
      window.addEventListener("scroll", triggerScroll);
    }
  }, []);

  const triggerScroll = useCallback(throttle(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    setIsLoading(scrollHeight - 150 < scrollTop + clientHeight);
  }, 500), []);

  return (
    <>
      <AppHeader
        setSearchKeyword={setSearchKeyword}
        setPageToken={setPageToken}
        setYoutubeData={setYoutubeData}
        setIsLoading={setIsLoading}
      />
      <Main>
        <Container>
          <Routes>
            <Route path="/videos" element={<VideoList youtubeData={youtubeData} />} />
            <Route path="/videos/:videoId" element={<VideoList youtubeData={youtubeData} />} />
            <Route path="/" element={<Navigate to="/videos" replace />} />
          </Routes>
        </Container>
      </Main>
    </>
  );
}
