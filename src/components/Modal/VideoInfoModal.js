import styled from "styled-components";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);

  .content {
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
  }

  .video {
    display: inline-block;
    padding: 30px;
  }
  .videoInfo {
    line-height: 180%
  }
`

export default function VideoInfoModal({ videoInfos, onClick }) {
  const videoId = useParams().videoId;
  let videoInfo = null;

  if (videoInfos[0].id.videoId) {
    videoInfo = videoInfos.filter(value => value.id.videoId === videoId)[0].snippet;
  } else {
    videoInfo = videoInfos.filter(value => value.id === videoId)[0].snippet;
  }

  return (
    <Container onClick={onClick}>
      <div className="content">
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
        <button onClick={onClick}>close</button>
      </div>
    </Container>
  );
}
