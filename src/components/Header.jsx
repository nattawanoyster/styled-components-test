import React from "react";
import styled, { css } from "styled-components";

const styles = css`
  .navBar {
    background-color: #ffc57b;
    padding: 10px;
    width: 100vw;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
  }

  .searchInput {
    background-color: #ffffff;
    padding: 8px;
    width: 500px;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    color: #000000;
    font-size: 16px;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }

    &:focus {
      outline: none;
      border-color: #ffbb75;
    }
  }

  .button {
    padding: 8px 16px;
    margin-left: 10px;
    background-color: #eeab56;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #e4a759;
    }

    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 5px;
    }
  }
`;

const Header = () => (
  <>
    <style>{styles}</style>
    <nav className="navBar">
      <div className="logo">FLEXGO</div>
      <input className="searchInput" type="text" placeholder="Search" />
      <div>
        <button className="button">Sign In</button>
        <button className="button">Sign Up</button>
      </div>
    </nav>
  </>
);

export default Header;
