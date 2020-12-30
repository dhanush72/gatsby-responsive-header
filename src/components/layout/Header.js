import React, { useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../../styles/Buttons/MenuButton"
import { Link } from "gatsby"
import MenuTooltip from "../tooltips/MenuTooltip"
import { useEffect } from "react"
import { useRef } from "react"
import MainTooltip from "../tooltips/MainTooltip"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMainOpen, setIsMainOpen] = useState(false)
  const ref = useRef()
  const mainRef = useRef()
  const tooltipRef = useRef()

  const handleClick = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const handleMainClick = e => {
    e.preventDefault()
    setIsMainOpen(!isMainOpen)
  }

  const handleClickOutside = e => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      !tooltipRef.current.contains(e.target) &&
      !mainRef.current.contains(e.target)
    ) {
      setIsOpen(false)
      setIsMainOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="Logo" />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((menu, index) =>
          menu.link === "/account" ? (
            <MenuButton menu={menu} key={index} onClick={e => handleClick(e)} />
          ) : (
            <MenuButton menu={menu} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            menu={{
              title: "",
              icon: "/images/icons/hamburger.svg",
              link: "/",
            }}
            onClick={e => handleMainClick(e)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
      <div ref={mainRef}>
        <MainTooltip isMainOpen={isMainOpen} />
      </div>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 44px auto;
  height: 44px;
  margin: 0px auto;
  padding: 60px 30px;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  /* position: absolute;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  max-width: 1200px;
  height: 44px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  padding: 60px 30px;
  z-index: 3;
  align-items: center; */

  @media (max-width: 550px) {
    padding: 20px;
  }

  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(${({ count }) => count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    display: block;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(${({ count }) => count}, auto);
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: relative;
    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    right: 0px;
    border-radius: 50%;
    background: rgba(15, 14, 71, 0.3);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
    backdrop-filter: blur(40px);
    cursor: pointer;
  }
`
