import { jsx } from "theme-ui";
import Navbar from './Navbar';
import Mobilebar from './Mobilebar';
import styled from 'styled-components';
import React, { useState } from 'react';
import './Navbar.css'

// shoutout to https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci
// for the styled hamburger menu and its awesome animations

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 100;
  display: none;
  @media (max-width: 55em) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

function Nav () {
  const [open, setOpen] = useState(false);
  function handleChange(newValue) {
    setOpen(newValue);
  }

  const mobile = (
      <div className="modal">
        <Mobilebar onChange={handleChange}/>
      </div>
  );

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Navbar/>
      {open && mobile}
    </>
  );
}

export default Nav;