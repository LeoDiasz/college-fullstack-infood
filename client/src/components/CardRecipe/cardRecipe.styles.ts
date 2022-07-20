import styled from "styled-components"

const DivContent = styled.div`
  background: #fff;
  width: 100%;
  min-height: 500px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.4s;

  img {
    width: 100%;
    height: 210px;
    object-fit: cover;
   
  }

  &:hover {
    background-color: #f2f2f2;
  }
`

const DivText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px 0;

`

export {DivContent, DivText}