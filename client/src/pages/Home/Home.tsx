import bannerImg from "../../assets/banner.png"
import logoImg from "../../assets/logo.png"

import {DivContent} from "./home.styles"

export const Home = () => {
  return (
  <DivContent>
    <main>
      <img src={logoImg} alt="logo" width="80px"/>
      <h1>Realizar Login</h1>


    </main>
    <section>
      <h1>Crie e veja novas receitas</h1>
      <p>Compartilhe e veja as principais receitas de hoje em dia!</p>
      <img src={bannerImg} alt="banner" />
    </section>
  </DivContent>
  )
}