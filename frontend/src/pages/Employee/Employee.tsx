import { useCallback, useState } from "react";
import { Header } from "../../components/Header/Header";
import api from "../../services/api";
import "./styles.scss";

export function Employee() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");

   const handleSubmit = useCallback(
    async(event) => {
      event.preventDefault();
      await api.post("/employee", {
        name, 
        nickname,
        phone
      })
    },[name, nickname, phone]
  )
  return (
    <>
      <Header />
      <main>
        <div className="card-post">
          <h3>Cadastro de funcionarios:</h3>
          <div className="line-post"></div>
          <div className="card-body-post">
            <form>
              <div className="form-group">
                <label>Nome: </label>
                <input type="text"  onChange={(event) => setName(event?.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor=" ">Apelido: </label>
                <input type="text"  onChange={(event) => setNickname(event?.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="">Telefone: </label>
                <input type="text"  onChange={(event) => setPhone(event?.target.value)} />
              </div>

              <div className="btn-post">
                <button type="submit" onChange={handleSubmit}>Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </main>

    </>
  );
}

