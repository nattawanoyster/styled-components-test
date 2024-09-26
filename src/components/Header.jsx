import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
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
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;

const SearchInput = styled.input`
  background-color: #ffffff;
  padding: 8px;
  width: 500px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  color: #000000; /* Set the text color to black */
  font-size: 16px; /* Optional: Set font size for better readability */

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }

  &:focus {
    outline: none; /* Removes the default outline when focused */
    border-color: #ffbb75; /* Optional: Change border color when focused */
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #eeab56;
  border: none;
  border-style: solid
  border-radius: 8px;
  cursor: pointer;
  

  &:hover {
    background-color: #e4a759;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 5px;
  }
`;

const Header = () => (
  <NavBar>
    <Logo>FLEXGO</Logo>
    <SearchInput type="text" placeholder="Search" />
    <div>
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
    </div>
  </NavBar>
);

export default Header;
