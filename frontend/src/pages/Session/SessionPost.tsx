import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import * as yup from "yup";
import { Header } from "../../components/Header/Header";
import api from '../../services/api';

interface SessionDate {
  name: string
  description: string
}

const schema = yup.object().shape({
  name: yup.string().required("O Nome é obrigatório"),
  description: yup.string().required("A descrição é obrigatório")
})

export default function Session() {
  let history = useHistory();
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")


  const { register, handleSubmit, formState: { errors } } = useForm<SessionDate>({
    resolver: yupResolver(schema)
  })

  const handleCreateSession = async (data: SessionDate) => await api.post("/session", data)
    .then(() => {
      console.log("Deu tudo certo")
      history.push("/session-list")
    })
    .catch(() => {
      console.log("DEU ERRADO")
    })
  return (
    <>
      <div>
        <Header />
        <main>
          <div className="card-post">
            <h2>Cadastrar Seção:</h2>
            <div className="line-post"></div>
            <div className="card-body-post">
              <form onSubmit={handleSubmit(handleCreateSession)}>
                <div className="fields">
                  <label>Nome da secão: </label>
                  <input
                    type="text"
                    value={name}
                    {...register("name")}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <p className="error-message">{errors.name?.message}</p>
                </div>
                <div className="fields">
                  <label>Descrição: </label>
                  <input
                    type="text"
                    value={description}
                    {...register("description")}
                    onChange={(event) => setDescription(event.target.value)} />
                  <p className="error-message">{errors.description?.message} </p>
                </div>
                <div className="btn-post" >
                  <button type="submit" >Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
