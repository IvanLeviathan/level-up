import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HeaderContainer from '../components/Header/container';
import TodoListContainer from '../components/TodoList/container';
import { auth, common } from '../mock-routes/index';
import LoginContainer from '../modules/login/container';
import RegistrationContainer from '../modules/registration/container';


export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return <>
      <HeaderContainer/>
      <div className="container">
        <div className="row">
          <div className="col-12 py-3">
            <Switch>
              <Route path={common.todo()} exact>
                <TodoListContainer/>
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