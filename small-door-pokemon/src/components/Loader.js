import React from "react"
import styled from "styled-components"
import spinner from "../images/pokeball-3.png"

export default function Loader() {
  return (
    <Wrapper>
      <Logo src={spinner} alt="poke ball"></Logo>
      <h5>building deck</h5>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 8%;
  height: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const Logo = styled.img`
  height: 53%;
  width: 53%;
  animation: rotating 2.3s linear infinite;

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
