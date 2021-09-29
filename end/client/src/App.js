import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from './pages';
import AlertsContainer from './components/Alerts/container';
import { useSelector } from 'react-redux';
import { useAuth } from './hooks/auth.hook';
import { useEffect } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useSelector((state) => state.authReducer);
  const { token, login, logout, userId } = useAuth();

  
  useEffect(() => {
    user && login(user.token, user.userId);
   }, [user]);

  const routes = useRoutes(!!token);

  return (
    <div className="App">
      <AuthContext.Provider value={{ token, login, logout, userId }}>
        {routes}
        <AlertsContainer/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
