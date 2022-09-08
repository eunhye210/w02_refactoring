import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";
import Portal from "../Modal/Portal";
import GreetingMessageModal from "../Modal/GreetingMessageModal";
import VideoInfoModal from "../Modal/VideoInfoModal";

const Wrapper = styled.div`
  display: grid;
  padding: 2em 0 0;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 280px 280px 280px;
  column-gap: 20px;
  row-gap: 60px;
`;

export default function VideoList({ youtubeData }) {
  const navigate = useNavigate();
  const [showGreetingMsg, setShowGreetingMsg] = useState(true);
  const [showVideoInfo, setShowVideoInfo] = useState(false);

  function showVideoModal() {
    setShowVideoInfo(!showVideoInfo);
    navigate('/videos');
  }

  return (
    <>
      <Portal>
        {showGreetingMsg && <GreetingMessageModal onClick={() => setShowGreetingMsg(false)} />}
        {showVideoInfo && <VideoInfoModal videoInfos={youtubeData} onClick={showVideoModal} />}
      </Portal>
      <Wrapper>
        {youtubeData?.map((data, index) => {
          return <VideoListEntry key={index} data={data} onClick={showVideoModal} />
        })}
      </Wrapper>
    </>
  );
}
