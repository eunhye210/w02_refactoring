import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";

import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import Container from "../shared/Container";

const Main = styled.main`
  margin-top: 110px;
`;

export default function App() {
  return (
    <>
      <AppHeader />
      <Main>
        <Container>
          <Routes>
            <Route path="/videos" element={<VideoList />} />
            <Route path="/videos/:videoId" element={<div>🖥 Use a modal to display video details!</div>} />
            <Route path="/" element={<Navigate to="/videos" replace />} />
          </Routes>
        </Container>
      </Main>
    </>
  );
}
