import styled from "styled-components"

const DivContent = styled.div`
  display: grid;
  grid-template-columns: 60% 50%;
  overflow: hidden;
  height: 100vh;
  

`

const SectionContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 

`

const DivSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 40px;
  
  img:first-child {
    margin-bottom: 30px;
  }

  a:last-child {
    margin-top: -20px;
    align-self: flex-end;
    color: #DE3557;
    text-decoration: underline;
    font-weight: bold;
  }

 
`
const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  input, button {
    min-width: 300px;
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

export {DivContent, SectionContent, FormContent, DivSection, InputContent}