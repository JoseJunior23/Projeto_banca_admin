import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../components/FormatDate/FormatDate";
import { api } from "../../services/api";

interface EmployeeData{
  id: number; 
  name:string;
  nickname: string;
  phone: string;
  created_at: Date;
  update_at:Date
}

const ListEmployee: React.FC = () => {
  const [employee, setEmployee] = useState<EmployeeData[]>([] as EmployeeData[]);

  const history = useHistory();

  useEffect(() => {
   const response = api.get("/employee").then((response) => setEmployee(response.data));
   console.log(response)
  }, []);

  return (
    <div>
       <form action="" className="container">
      <h3>Listagem de funcionarios</h3>

      <div>
        {employee.map((employee) => (
          <div key={employee.id}>
           
            <span>Nome: {employee.name}</span>
            <br />
            <span>Apelido: {employee.nickname}</span>
            <br />
            <span>Telefone: {employee.phone}</span>
            <br />
            <span>Data de criação: {formatDate(employee.created_at)}</span>
            <br />
            <span>Data da ultima atualização: {formatDate(employee.update_at)}</span>
            <br />
            <hr />
          </div>
        ))}

              <button onClick={() => history.push("/employee")}>
                Cadastrar funcionario
              </button>
           
      </div>
      </form>
    </div>
  );
};

export { ListEmployee };
  
