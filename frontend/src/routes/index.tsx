
import { Route, Switch } from "react-router-dom";
import { Funcionario } from "../pages/Funcionario";


const Routes = () => {
  return (
    <Switch>
      <Route path="/employee" component={Funcionario} />
      <Route path="/employee" component={Funcionario} />
    </Switch>
  );
};

export { Routes };

