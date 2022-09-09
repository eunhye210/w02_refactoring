import styled from "styled-components";
import { useRef } from "react";

export default function ShowModal({ children, closeModal }) {
  const modalOutside = useRef();

  const handleModal = (e) => {
    if (modalOutside.current === e.target) {
      closeModal();
    }
  }
  return (
    <Container ref={modalOutside} onClick={handleModal}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`
