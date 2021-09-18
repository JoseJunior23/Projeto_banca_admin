import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { formatDate } from "../../validations/FormatDate/FormatDate";
import "./styles.scss";


export interface SessionProps {
  id: number;
  name: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
}


export function SessionList() {
  const [sessions, setSessions] = useState<SessionProps[]>([] as SessionProps[]);

  useEffect(() => {
    api.get("/session")
      .then((response) => setSessions(response.data)
      )
      .catch(() => console.log("Erro ao listar seções"))
  }, [])

  function deleteSession(id: number) {
    api.delete(`/session-delete/${id}`);
    setSessions(sessions.filter(session => session.id !== id))
  }

  return (
    <>
      <main>

        <div className="cards">
          <h2>Seções cadastradas:</h2>
          {sessions.map((session, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{session.name}</h2>
                </header>
                <div className="line"></div>
                <div>
                  <span>Descrição: {session.description} </span><br />
                  <span>Data da criação: {formatDate(session.created_at)} </span><br />
                  <span>Data da atualização: {formatDate(session.updated_at)} </span>
                </div>
                <div className="btns">
                  <div className="btn-edit">
                    <Link to={{ pathname: `/session-edit/${session.id}` }}>
                      <button>Editar</button>
                    </Link>
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