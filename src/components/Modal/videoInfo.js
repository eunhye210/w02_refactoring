import styled from "styled-components";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { createPortal } from "react-dom";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -300px;
  width: 650px;
  height: 650px;
  color: "rgba(0, 0, 0, .9)";
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .video {
    padding: 30px;
  }
  .videoInfo {
    text-align: center;
    line-height: 180%
  }
`

export default function VideoInfos({ videoInfos }) {
  const videoId = useParams().videoId;
  const videoInfo = videoInfos.filter(value => value.id === videoId)[0].snippet;

  return createPortal(
    <Container>
      <div className="video">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          muted={true}
          playing={false}
          width="400px"
          height="250px"
        />
      </div>
      <div className="videoInfo">
        <b><div>{videoInfo.title}</div></b>
        <div>Channel Title : {videoInfo.channelTitle}</div>
        <div>Published Time : {videoInfo.publishedAt.slice(0, 10)}</div>
        <div className="text">: {videoInfo.description}</div>
      </div>
    </Container>,
    document.getElementById("portal")
  );
}
