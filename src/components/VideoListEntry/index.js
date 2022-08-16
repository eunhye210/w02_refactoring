import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EntryWrapper = styled.div`
  width: 100%
  height: 200px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  .contents {
    flex-grow: 1;
  }

  .text {
    max-width: 30ch;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export default function VideoListEntry({ videoId, videoInfos }) {
  return (
    <EntryWrapper>
      <div>
        <img src={videoInfos.thumbnails.default.url} alt="thumbnail_url" />
      </div>
      <div className="contents">
        <b><Link to={videoId}>{videoInfos.title}</Link></b>
        <div>{videoInfos.publishedAt.slice(0, 10)}</div>
        <div className="text">{videoInfos.description}</div>
      </div>
    </EntryWrapper>
  );
}
