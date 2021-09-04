import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import * as yup from "yup";
import api from '../../services/api';

interface ISession {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

const schema = yup.object().shape({
  name: yup.string().required("O Nome é obrigatório"),
  description: yup.string().required("A descrição é obrigatório")
})

export function SessionEdit() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  let history = useHistory();
  const { id } = useParams<{ id: string }>();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ISession>({
    resolver: yupResolver(schema)
  })


  const handleUpdateSession = async (data: ISession) => {
    await api.put(`/session-edit/${id}`, data)
      .then(() => {
        console.log("Deu tudo certo")
        history.push("/session-list")
      })
      .catch(() => {
        console.log("DEU ERRADO")
      })
  }

  useEffect(() => {
    api.get(`/session/${id}`)
      .then((response) => {
        reset(response.data)
      })
  }, [id, reset]);


  return (
    <>
      <div>
        <main>
          <div className="card-post">
            <h2>Cadastrar Seção:</h2>
            <div className="line-post"></div>
            <div className="card-body-post">
              <form onSubmit={handleSubmit(handleUpdateSession)}>
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
  );
};