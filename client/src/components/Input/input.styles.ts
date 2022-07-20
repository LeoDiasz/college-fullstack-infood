import styled from "styled-components"

export const InputContent = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #A8A8B3;

  padding: 0 20px;
  min-width: 300px;
  width: 100%;
  height: 50px;
  color: #A8A8B3;

  &::placeholder {
    color: #A8A8B3;
  }
`