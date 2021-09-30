import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../../context/AuthContext';
import { authGetUserInfo } from '../../../store/auth/login';
import Header from '../component'

export default function HeaderContainer() {
  const dispatch = useDispatch();
  const context = useContext(AuthContext);
  const { userInfo } = useSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(authGetUserInfo(context.userId));
  }, [])

  return (
    <Header userInfo={userInfo} logout={context.logout}/>
  )
}
