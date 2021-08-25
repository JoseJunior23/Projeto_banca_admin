import React, { useCallback, useState } from "react";
import { api } from "../../services/api";
import "./styles.css";


const Funcionario: React.FC = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");

  
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      await api.post("/employee", {
        name,
        nickname,
        phone
      });
    },[  name,nickname,phone]
  );

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Nome: </label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="">Apelido: </label>
        <input type="text" onChange={(event) => setNickname(event?.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="">Telefone: </label>
        <input type="text" onChange={(event) => setPhone(event?.target.value)} />
      </div>
    

      <div className="form-group">
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
};

export { Funcionario };

