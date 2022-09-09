import React from "react";
import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";
import useModal from "../hooks/useModal";
import ShowModal from "../ShowModal";
import GreetingModal from "../GreetingModal.js";
import VideoInfoModal from "../VideoInfoModal";

export default function VideoList({ youtubeData }) {
  const { isModalOpen, modalType, openModal, closeModal } = useModal();

  return (
    <>
      {isModalOpen &&
        <ShowModal closeModal={closeModal} >
          {modalType === "greetingModal" && <GreetingModal onClose={closeModal} />}
          {modalType === "videoInfo" && <VideoInfoModal videoInfos={youtubeData} onClose={closeModal} />}
        </ShowModal>
      }
      <Wrapper>
        {youtubeData?.map((data, index) => {
          return <VideoListEntry key={index} data={data} openModal={openModal} />
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  padding: 2em 0 0;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 280px 280px 280px;
  column-gap: 20px;
  row-gap: 60px;
`;
