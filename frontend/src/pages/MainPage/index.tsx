import { Link } from "react-router-dom"
import "./styles.scss"

export function MainPage() {
  return (
    <>
      <div className="main-page">
        <h1>Bem vindo ao Banca admin</h1>
      </div>
      <div className="body-page">
        <Link to="/session">
          <button>Cadastrar uma sessão:</button>
        </Link><br />
        <Link to="/session-list">
          <button>Lista de Seções:</button>
        </Link><br />
        <Link to="/session-edit">
          <button>Editar uma Seção:</button>
        </Link><br />
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