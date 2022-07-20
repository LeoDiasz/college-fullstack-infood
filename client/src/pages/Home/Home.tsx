import logoImg from "../../assets/logo.png"
import { SectionMain } from "../../components/SectionMain/SectionMain"
import {DivContent} from "./home.styles"

export const Home = () => {
  return (
  <DivContent>
    <main>
      <img src={logoImg} alt="logo" width="80px"/>
      <h1>Realizar Login</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button>
          <span>Login</span>
        </button>
      </form>

    </main>
    <SectionMain/>
  </DivContent>
  )
}