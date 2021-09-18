import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { formatDate } from "../../validations/FormatDate/FormatDate";
import "./styles.scss";


export interface EmployeeProps {
  id: number;
  name: string;
  nickname: string
  phone: string;
  session: string;
  created_at: Date;
  updated_at: Date;
}


export const EmployeeList = (props: EmployeeProps) => {
  const [employees, setEmployees] = useState<EmployeeProps[]>([] as EmployeeProps[]);

  useEffect(() => {
    api.get("/employee")
      .then((response) => setEmployees(response.data)
      )
      .catch(() => console.log("Erro ao listar empregados"))
  }, [])

  function deleteEmployee(id: number) {
    api.delete(`/employee-delete/${id}`);
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  return (
    <>
      <main>

        <div className="cards">
          <h2>Empregados cadastrados:</h2>
          {employees.map((employee, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{employee.name}</h2>
                </header>
                <div className="line"></div>
                <div>
                  <span>Apelido: {employee.nickname} </span><br />
                  <span>Telefone: {employee.phone} </span><br />
                  <span>Seção: {props.session} </span><br />
                  <span>Data da criação: {formatDate(employee.created_at)} </span><br />
                  <span>Data da atualização: {formatDate(employee.updated_at)} </span>
                </div>
                <div className="btns">
                  <div className="btn-edit">
                    <Link to={{ pathname: `employee-edit/${employee.id}` }}>
                      <button>Editar</button>
                    </Link>
                  </div>
                  <div className="btn-delete">
                    <button onClick={() => deleteEmployee(employee.id)}>Deletar</button>
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