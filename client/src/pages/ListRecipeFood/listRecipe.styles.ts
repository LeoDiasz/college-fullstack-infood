import styled from "styled-components";


const DivContent = styled.div`
  background-color: #F8F8F8;
  padding: 20px 0px;
`

const SectionContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

`
const ListRecipe = styled.ul `
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  flex-wrap: wrap;
  gap: 20px;

`

export { ListRecipe, SectionContent, DivContent}