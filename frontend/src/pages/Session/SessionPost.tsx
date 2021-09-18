import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import * as yup from "yup";
import api from '../../services/api';

interface SessionProps {
  name: string
  description: string
}

const schema = yup.object().shape({
  name: yup.string().required("O Nome é obrigatório"),
  description: yup.string().required("A descrição é obrigatório")
})

export function SessionPost() {
  let history = useHistory();

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm<SessionProps>({
    resolver: yupResolver(schema)
  })

  const handleCreateSession = async (data: SessionProps) =>
    await api.post("/session", data)
      .then(() => {
        history.push("/session-list")
      })
      .catch(() => {
        console.log("erro ao listar seção")
      })
  return (
    <>
      <div>
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
