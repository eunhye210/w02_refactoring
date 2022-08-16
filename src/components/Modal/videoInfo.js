import styled from "styled-components";

const OverlayWrapper = styled.div`
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
`

export default function VideoInfos({ videoInfos }) {

  return (
    <p>구체적인 인포 뜨기</p>
    // <OverlayWrapper>
    //   <div>
    //     <img src={videoInfos.thumbnails.default.url} alt="thumbnail_url" />
    //   </div>
    //   <div>
    //     <div>{videoInfos.title}</div>
    //     <div>{videoInfos.publishedAt}</div>
    //     <div>{videoInfos.description}</div>
    //   </div>
    // </OverlayWrapper>
  );
}
