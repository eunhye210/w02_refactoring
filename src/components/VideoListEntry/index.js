import React from "react";
import styled from "styled-components";

const EntryWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  .contents {
    flex-grow: 1;
  }
`;

export default function VideoListEntry({ thumbnail, title, published, description }) {
  return (
    <EntryWrapper>
      <div>
        <img src={thumbnail} alt="thumbnail_url" />
      </div>
      <div className="contents">
        <div>Video Title: {title}</div>
        <div>Published: {published}</div>
        <div>Video Description: {description}</div>
      </div>
    </EntryWrapper>
  );
}
