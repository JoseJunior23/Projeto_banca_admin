import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import api from "../../services/api";
import { SessionProps } from "../Session/SessionList";

interface EmployeeProps {
  name: string;
  nickname: string;
  phone: string;
  session: SessionListProps;
}

export interface SessionListProps {
  name: SessionProps[];
  description: SessionProps[];
}


const schema = yup.object().shape({
  name: yup.string().required("O Nome é obrigatório"),
  nickname: yup.string().required("A apelido é obrigatório"),
  phone: yup.string().required("O telefone é obrigatório"),
  session: yup.string().required("Selecione uma seção")
});

export function EmployeePost() {

  const [name, setName] = useState("")
  const [nickname, setNickname] = useState("")
  const [phone, setPhone] = useState("")
  const [employeeSession, setSessions] = useState<SessionListProps[]>([] as SessionListProps[])

  useEffect(() => {
    api.get("/session")
      .then((response) => setSessions(response.data)
      )
      .catch(() => console.log("Erro ao listar seções"))
  }, [])

  let history = useHistory();


  const { register, handleSubmit, formState: { errors } } = useForm<EmployeeProps>({
    resolver: yupResolver(schema)
  })

  const handleCreateEmployee = async (data: EmployeeProps) =>
    await api.post("/employee", data)
      .then(() => {
        history.push("/session-list")
      })
      .catch(() => {
        console.log("erro ao cadastra funcionario")
      })

  return (
    <>
      <div>
        <main>
          <div className="card-post">
            <h2>Cadastrar funcionario:</h2>
            <div className="line-post"></div>

            <div className="card-body-post">

              <form onSubmit={handleSubmit(handleCreateEmployee)}>

                <div className="fields">
                  <label>Nome do funcionario </label>
                  <input type="text" value={name} {...register}
                    onChange={(event) => setName(event.target.value)} />
                  <p className="error-message">{errors.name?.message}</p>
                </div>

                <div className="fields">
                  <label>Apelido: </label>
                  <input type="text" value={nickname}{...register}
                    onChange={(event) => setNickname(event.target.value)} />
                  <p className="error-message">{errors.nickname?.message} </p>
                </div>

                <div className="fields">
                  <label>Telefone: </label>
                  <input type="text" value={phone}{...register}
                    onChange={(event) => setPhone(event.target.value)} />
                  <p className="error-message">{errors.phone?.message} </p>
                </div>

                <div className="fields">
                  <label>Seção de trabalho: </label>
                  <select>{
                    employeeSession.map((session, key) =>
                      <option key={key} {...register}>
                        {session.name}
                      </option>)
                  }
                  </select>
                  <p className="error-message">{errors.session?.message} </p>
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