import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";
import Greeting from "../Modal/greetingMessage";
import VideoInfos from "../Modal/videoInfo";

const Wrapper = styled.div`
  display: grid;
  padding: 2em 0 0;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 200px 200px 200px;
  column-gap: 20px;
  row-gap: 60px;
`;

export default function VideoList({ items }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Greeting isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Wrapper>
        {items?.map((item, index) => {
          return <VideoListEntry key={index} videoId={item.id.videoId} videoInfos={item.snippet} />
        })}
      </Wrapper>
    </>
  );
}
