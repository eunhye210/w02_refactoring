import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function GreetingModal({ onClose }) {
  return (
    <Content>
      <img src={logo} alt="logo" />
      <h2>Welcome to Youtube Viewer!</h2>
      <button onClick={onClose}>close</button>
    </Content>
  );
}

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -150px;
  width: 300px;
  height: 200px;
  background-color: rgba(0, 0, 255, 0.9);
  color: white;
  border-radius: 16px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
  text-align: center;

  img {
    padding-top: 30px;
    height: 15px;
  }
`;
