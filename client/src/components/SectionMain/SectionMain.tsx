import bannerImg from "../../assets/banner.png"
import {Section} from "./sectionMain.styles"

export const SectionMain= () => {
  return (
    <Section>
      <div>
        <h1>Crie e veja novas receitas</h1>
        <p>Compartilhe e veja as principais receitas de hoje em dia!</p>
      </div>
      
      <img src={bannerImg} alt="banner" />
    </Section>
  )
}