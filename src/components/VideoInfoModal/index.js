import styled from "styled-components";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

export default function VideoInfoModal({ videoInfos, onClose }) {
  const videoId = useParams().videoId;
  const videoInfo = videoInfos.find(value => {
    return videoId === (value.id.videoId ?? value.id);
  }).snippet;

  return (
    <Content>
      <div className="video">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          muted={true}
          playing={true}
          width="400px"
          height="250px"
        />
      </div>
      <div className="videoInfo">
        <b><div>{videoInfo.title}</div></b>
        <div><b>{videoInfo.channelTitle}</b>, {videoInfo.publishedAt.slice(0, 10)}</div>
        <div className="text">{videoInfo.description}</div>
      </div>
      <button onClick={onClose}>close</button>
    </Content>
  );
}

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -400px;
  height: auto;
  width: 800px;
  background-color: rgba(240, 240, 240, 0.9);
  text-align: center;
  padding: 30px;
  border-radius: 16px;

  .video {
    display: inline-block;
    padding: 30px;
  }
  .videoInfo {
    line-height: 180%;
  }
`
