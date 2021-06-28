import React from 'react';
import Header from './components/Header';
import { HomePage } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from './components/Modals';

function App() {
  return (
    <div>
      <Header/>
      <HomePage/>
      <Modals/>
    </div>
  );
}

export default App;
