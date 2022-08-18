import styled from "styled-components";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .content {
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
  }

  img {
    padding-top: 30px;
    height: 15px;
  }
`;

export default function GreetingMessageModal({ onClose }) {
  return (
    <Container onClick={onClose}>
      <div className="content">
        <img src={logo} alt="logo" />
        <h2>Welcome to Youtube Viewer!</h2>
        <button>close</button>
      </div>
    </Container>
  );
}
