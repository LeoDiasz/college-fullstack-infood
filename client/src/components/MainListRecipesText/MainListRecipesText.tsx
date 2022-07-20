import {DivSection} from "./main.styles"

type MainListDatas = {
  goForButton: () => void;
  text: string;
  textButton: string;
}

export const MainListRecipesText = ({goForButton, text, textButton}:MainListDatas) => {
  return (
    <DivSection>
      <h1>{text}</h1>
      <button onClick={goForButton}>{textButton}</button>
    </DivSection>
  )
}