
import { Route, Switch } from "react-router-dom";
import { EmployeeList } from "../pages/Employee/EmployeeList";
import { EmployeePost } from "../pages/Employee/EmployeePost";
import { MainPage } from "../pages/MainPage";
import { SessionEdit } from "../pages/Session/SessionEdit";
import { SessionList } from "../pages/Session/SessionList";
import { SessionPost } from "../pages/Session/SessionPost";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/session" component={SessionPost} />
      <Route path="/session-list" component={SessionList} />
      <Route path="/session-edit/:id" component={SessionEdit} />
      <Route path="/employee" component={EmployeePost} />
      <Route path="/employee-list" component={EmployeeList} />
    </Switch>
  )
}