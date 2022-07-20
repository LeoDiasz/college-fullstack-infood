import {DivContent, DivText} from "./cardRecipe.styles"

type CardRecipeDatas = {
  img: string;
  description: string;
  name: string;
}
export const CardRecipe = ({img, name, description} :CardRecipeDatas) => {
  return (
    <DivContent>
      <img src={img} alt="imagem" />
      <DivText>
        <h2>{name}</h2>
        <p>{description}</p>
      </DivText>
    </DivContent>
  )
}