import React, { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
//import Text from './components/Text';
import Notes from './components/Notes';
import { User } from './components/User';
import { Settings } from './components/Settings';
import { Profile } from './components/Profiile';
import { HomePage } from './pages';

function App() {
  const [showNotes, showNotesToggle] = useState(true);

  let handleButtonClick = () => {
    showNotesToggle(!showNotes);

  }
  
  return (
    <div>
      <Header/>
      {/* <Button name="Show" hideName="Hide" handleButtonClick={handleButtonClick} showText={showNotes}/> */}
      {/* {showNotes && <Notes/>} */}
      {/* <User/>
      <Settings/>
      <Profile/> */}
      <HomePage/>
    </div>
  );
}

export default App;
