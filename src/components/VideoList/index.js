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

export default function VideoList({ items }) {
  const navigate = useNavigate();
  const [showGreetingMsg, setshowGreetingMsg] = useState(true);
  const [showVideoInfo, setShowVideoInfo] = useState(false);

  function onClick() {
    setShowVideoInfo(!showVideoInfo);
    navigate('/videos');
  }

  return (
    <>
      <Portal>
        {showGreetingMsg && <GreetingMessageModal onClose={() => setshowGreetingMsg(false)} />}
        {showVideoInfo && <VideoInfoModal videoInfos={items} onClick={onClick} />}
      </Portal>
      <Wrapper>
        {items?.map((item, index) => {
          return <VideoListEntry key={index} item={item} onClick={onClick} />
        })}
      </Wrapper>
    </>
  );
}
