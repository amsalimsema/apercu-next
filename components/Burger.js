import React, { useState } from 'react';
import styled from 'styled-components';
import SideDrawer from './SideDrawer';

const StyledBurger = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  position: fixed;
  top: 50px;
  right: 3rem;
  z-index: 130;
  display: none;
  @media (min-width: 320px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1.4rem;
    height: 0.2rem;
    cursor: pointer;
    background-color: ${({ open }) => (open ? 'black' : 'black')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <SideDrawer open={open} />
    </>
  );
};
export default Burger;
