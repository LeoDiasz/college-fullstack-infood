import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  
  background-color: #D2603C;
  overflow: hidden;
  color: #fff;

  div {
    padding-left: 60px;
    padding-top: 200px;
  }

  h1 {
    max-width: 40%;
    line-height: 1.25;
    font-size: 36px;
    margin-bottom: 10px;
  }

  p {
    color: #F8F8F8;
    font-size: 24px;
  }

  img {
    width: 85%;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

export {Section}