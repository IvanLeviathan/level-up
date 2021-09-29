import { Route, Switch, Redirect } from "react-router-dom";
import { Profile } from "../components/Profiile";
import { Settings } from "../components/Settings";
import { User } from "../components/User";

export const HomePage = () => {
  return <Switch>
    <Route path="/" component={Profile} />
    <Redirect to="/" />
  </Switch>
}