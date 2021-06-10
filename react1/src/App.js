import React from 'react';
import Header from './components/Header';
import { HomePage } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
