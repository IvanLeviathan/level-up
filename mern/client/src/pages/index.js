import { Redirect, Route, Switch } from 'react-router';
import React from 'react';
import { auth, common } from '../mock-routes';
import Login from "../modules/Login/container";
import Registration from "../modules/Registration/container";

export const useRoutes = (isAuthenticated) => {
  if(isAuthenticated){
    return (
      <Switch>
        <Route path={common.home()} exact>
          Home
        </Route>
        <Redirect to={common.home()}/>
      </Switch>
    )
  }else{
    return (
      <Switch>
        <Route path={auth.login()} exact>
            <Login/>
        </Route>
        <Route path={auth.registration()} exact>
          <Registration/>
        </Route>
        <Redirect to={auth.login()}/>
      </Switch>
    )
  }
}