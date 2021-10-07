import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router';
import { AuthContext } from '../../../context/AuthContext';
import { authGetUserInfo } from '../../../store/auth/login';
import Header from '../component'
import { common } from "../../../mock-routes/index";

export default function HeaderContainer() {
  const dispatch = useDispatch();
  const context = useContext(AuthContext);
  const { userInfo } = useSelector((state) => state.authReducer);
  const location = useLocation();
  useEffect(() => {
    dispatch(authGetUserInfo(context.userId));
  }, [])
  

  return (
    <Header 
      userInfo={userInfo}
      logout={context.logout}
      todoPage = {location.pathname === common.todo()}
    />
  )
}
