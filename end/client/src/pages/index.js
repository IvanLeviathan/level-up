import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HeaderContainer from '../components/Header/container';
import { auth, common } from '../mock-routes/index';
import LoginContainer from '../modules/login/container';
import RegistrationContainer from '../modules/registration/container';


export const useRoutes = (isAuthenticated) => {
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <>
      <HeaderContainer/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 col-lg-2 bg-light sidebar">
            sidabar
          </div>
          <div className="col-9 col-lg-10 pt-3 px-4 bg-light">
            <Switch>
              <Route path={common.todo()} exact>
                'Todo'
              </Route>
              <Route path={common.profile()} exact>
                'Profile'
              </Route>
              <Redirect to={common.todo()}/>
          </Switch>
          </div>
        </div>
      </div>
    </>
  }else{
    return (
      <Switch>
          <Route path={auth.login()} exact>
            <LoginContainer/>
          </Route>
          <Route path={auth.registration()} exact>
            <RegistrationContainer/>
          </Route>
          <Redirect to={auth.login()}/>
      </Switch>
  )
  }
}