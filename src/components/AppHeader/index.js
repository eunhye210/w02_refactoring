import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import SearchInput from "../SearchInput";
import Container from "../shared/Container";
import Heading from "../shared/Heading";

const Header = styled.header`
  position: fixed;
  background-color: #ffffff;
  width: 100%;
  top: 0;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);

  section {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 0;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  .brand {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 10px;
      text-transform: uppercase;
      font-style: italic;
    }
  }

  img {
    height: 15px;
  }

  .input-container {
    width: 300px;
  }
`;

export default function AppHeader({
    searchKeyword,
    setSearchKeyword,
    setPageToken,
    setYoutubeData,
    setIsLoading
  }) {
  function handleSubmit(e) {
    e.preventDefault();
    setYoutubeData([]);
    setPageToken("");
    setIsLoading(true);
  }

  return (
    <Header>
      <Container>
        <section>
          <Link to="/videos">
            <div className="brand">
              <img src={logo} alt="logo" />
              <Heading>Youtube Viewer</Heading>
            </div>
          </Link>
          <div className="input-container">
            <form onSubmit={handleSubmit}>
              <SearchInput
                placeholder="Youtube 검색"
                value={searchKeyword}
                onChange={setSearchKeyword}
              />
            </form>
          </div>
        </section>
      </Container>
    </Header>
  );
}
