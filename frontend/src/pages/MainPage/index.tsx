import { Link } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import "./styles.scss"
export function MainPage() {
  return (
    <>
      <Header />
      <div className="main-page">
        <h1>Bem vindo ao Banca admin</h1>
      </div>
      <div className="body-page">
        <Link to="/session">
          <button>Cadastrar uma sessão:</button>
        </Link><br />
        <Link to="/session-list">
          <button>Lista de Seções:</button>
        </Link>
        <Link to="/employee">
          <button>Cadastro de um  novo funcionario:</button>
        </Link><br />
        <Link to="/employee-list">
          <button>Lista de funcionarios</button>
        </Link>
      </div>
      <div className="btn-login">
        <button>Login</button>
      </div>
    </>
  )
}