import React from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../../styles/Buttons/MenuButton"

const MainTooltip = ({ isMainOpen }) => {
  return (
    <Wrapper isOpen={isMainOpen}>
      {menuData.map((item, index) =>
        item.title ? <MenuButton menu={item} key={index} /> : ""
      )}
    </Wrapper>
  )
}

export default MainTooltip

const Wrapper = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  margin-top: 10px;
  right: 50px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  transition: 0.3s ease-in-out;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) =>
    isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
