import { Route, Switch, Redirect } from "react-router-dom";
import { Profile } from "../components/Profiile";
import { Settings } from "../components/Settings";
import { User } from "../components/User";

export const HomePage = () => {
  return <Switch>
    <Route path="/user" component={User} />
    <Route path="/settings" component={Settings} />
    <Route path="/profile" component={Profile} />
    <Redirect to="/" />
  </Switch>
}