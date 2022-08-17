import styled from "styled-components";
import logo from "../../assets/logo.png";
import { createPortal } from "react-dom";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -150px;
  width: 300px;
  height: 200px;
  background: blue;
  color: white;
  border-radius: 16px;

  .content {
    text-align: center;
    padding-top: 20px;
  }

  img {
    height: 15px;
  }
`;

export default function Greeting({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <Container>
      <div className="content">
        <img src={logo} alt="logo" />
        <h2>Welcome to Youtube Viewer!</h2>
        <button onClick={onClose}>close</button>
      </div>
    </Container>,
    document.getElementById("portal")
  );
}
