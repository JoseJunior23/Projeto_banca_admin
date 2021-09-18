import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import * as yup from "yup";
import api from '../../services/api';

interface SessionProps {
  name: string;
  description: string;
}

const schema = yup.object().shape({
  name: yup.string().required("O Nome é obrigatório"),
  description: yup.string().required("A descrição é obrigatório")
})

export function SessionEdit() {

  const { id } = useParams<{ id: string }>();
  let history = useHistory()

  const handleUpdateSession = async (data: SessionProps) => {
    await api.put(`/session-edit/${id}`, data)
      .then(() => {
        history.push("/session-list")
        console.log("Deu tudo certo")
      })
      .catch(() => {
        console.log("erro na edição")
      })
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm<SessionProps
  >({
    resolver: yupResolver(schema)
  })

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
            <h2>Editar Seção:</h2>
            <div className="line-post"></div>

            <div className="card-body-post">

              <form onSubmit={handleSubmit(handleUpdateSession)}>

                <div className="fields">
                  <label>Nome da secão: </label>
                  <input type="text" {...register("name")} />
                  <p className="error-message">{errors.name?.message}</p>
                </div>

                <div className="fields">
                  <label>Descrição: </label>
                  <input type="text" {...register("description")} />
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