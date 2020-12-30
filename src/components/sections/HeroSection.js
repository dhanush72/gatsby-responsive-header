import React from "react"
import styled, { keyframes } from "styled-components"
import { H1, MediumText } from "../../styles/TextStyles"
import { themes } from "../../styles/ColorStyles"
import { PurchaseButton } from "../../styles/Buttons/PurchaseButton"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"

const HeroSection = () => {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br /> and code
            <span> React </span>
            apps
          </Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            sit magnam maiores?
          </Description>
          <PurchaseButton
            title="Start Learning"
            subtitle="120+ hours of videos"
          />
        </TextWrapper>

        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-10px);
    filter: blur(10px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
    filter: blur(0px);
  }
`

const Wrapper = styled.div`
  /* background: linear-gradient(180deg, #4316db, #9076e7 100%); */
  height: 890px;
  position: relative;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 30px;
  position: relative;

  @media (max-width: 414px) {
    padding: 0px 20px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 360px auto;
  }
`
const TextWrapper = styled.div`
  position: relative;
  top: 200px;
  display: grid;
  gap: 30px;

  /* selecting immuated elements */
  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  @media (max-width: 414px) {
    top: 120px;
  }
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
  max-width: 400px;
  background: linear-gradient(180deg, #730040, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`

const Description = styled(MediumText)`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0px;
  max-width: 360px;
  color: black !important;
`
