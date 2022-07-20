import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  padding: 0 20px;
  min-width: 300px; 
  width: 100%;
  height: 50px;
  background-color: #DEB935;
  color: #fff;
  transition: filter 0.2s;

  font-size: 16px;
  font-weight: bold;

  &:hover {
    filter: brightness(0.92)
  }
`

