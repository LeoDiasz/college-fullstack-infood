import styled from "styled-components";

const DivContent = styled.div`
  background-color: #F8F8F8;
  height: 100vh;
`

const SectionContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

`

const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  input, button {
    min-width: 300px;
  }

  button {
    width: 30%;
    align-self: center;
  }
`

const InputContent = styled.input`
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
export { FormContent, SectionContent, DivContent, InputContent}