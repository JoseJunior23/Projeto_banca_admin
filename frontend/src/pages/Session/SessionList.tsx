import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import api from "../../services/api";
import { formatDate } from "../../validations/FormatDate/FormatDate";
import "./styles.scss";


interface SessionData {
  id: number;
  name: string;
  description: string;
  created_at: Date;
}

export function SessionList() {
  const [sessions, setSessions] = useState<SessionData[]>([] as SessionData[]);

  useEffect(() => {
    api.get("/session")
      .then((response) => setSessions(response.data)
      )
      .catch(() => console.log("Erro ao listar seções"))
  }, [])

  function deleteSession(id: any) {
    api.delete("/session")
    setSessions(sessions.filter(session => session.id !== id))
  }
  return (
    <>
      <Header />
      <h2>Seções cadastradas:</h2>
      <main>
        <div className="cards">
          {sessions.map((session, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{session.name}</h2>
                </header>
                <div className="line"></div>
                <div>
                  <span>Descrição: {session.description} </span><br />
                  <span>Data da criação: {formatDate(session.created_at)} </span>
                </div>
                <div className="btns">
                  <div className="btn-edit">
                    <button>Editar</button>
                  </div>
                  <div className="btn-delete">
                    <button onClick={() => deleteSession(session.id)}>Deletar</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  );
};