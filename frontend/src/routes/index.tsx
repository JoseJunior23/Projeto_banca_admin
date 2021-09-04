
import { Route, Switch } from "react-router-dom";
import { Employee } from "../pages/Employee/Employee";
import { MainPage } from "../pages/MainPage";
import { SessionEdit } from "../pages/Session/SessionEdit";
import { SessionList } from "../pages/Session/SessionList";
import Session from "../pages/Session/SessionPost";


export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/session" component={Session} />
      <Route path="/session-list" component={SessionList} />
      <Route path="/session-edit/:id" component={SessionEdit} />
      <Route path="/employee" component={Employee} />
    </Switch>
  )
}