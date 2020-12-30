import React from "react"
import styled from "styled-components"

const WaveBackground = () => {
  return (
    <Wrapper>
      <Wave1 style={{ top: "0px" }} />
      <Background />
      <Wave2 />
      <Wave src="/images/waves/hero-wave3.svg" style={{ top: "550px" }} />
    </Wrapper>
  )
}

export default WaveBackground

const Wrapper = styled.div`
  position: relative;

  @media (max-width: 414px) {
    top: -130px;
  }
`

const Wave1 = styled.img`
  position: absolute;
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100%;
  top: 137px;
  height: 900px;
  background-image: url("/images/waves/wave1.png");

  @media (max-width: 768px) {
    background-position: 25% 0%;
  }

  @media (max-width: 1200px) {
    background-size: 1440px;
  }
`

const Wave2 = styled.div`
  position: absolute;
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100%;
  top: 380px;
  left: 0px;
  height: 600px;
  background-image: url("/images/waves/hero-wave2.svg");

  @media (max-width: 500px) {
    background-size: 180%;
    top: 400px;
  }
`

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 1440px) {
    background-size: 1440px;
  }
`

const Background = styled.div`
  background: linear-gradient(180deg, #4316db, #9076e7 100%);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;

  @media (max-width: 768px) {
    height: 600px;
  }
`
