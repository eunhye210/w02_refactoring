import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

  .text {
    max-width: 30ch;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export default function VideoListEntry({ data, onClick }) {
  let videoId = null;
  const videoInfo = data.snippet;

  if (data.id.videoId) {
    videoId = data.id.videoId;
  } else {
    videoId = data.id;
  }

  return (
    <EntryWrapper>
      <Link to={videoId} onClick={onClick}>
        <img src={videoInfo.thumbnails.default.url} alt="thumbnail_url" />
      </Link>
      <div className="contents">
        <b>{videoInfo.title}</b>
        <div>{videoInfo.publishedAt.slice(0, 10)}</div>
        <div className="text">{videoInfo.description}</div>
      </div>
    </EntryWrapper>
  );
}
