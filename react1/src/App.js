import React, { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
//import Text from './components/Text';
import Notes from './components/Notes';


function App() {
  const [showNotes, showNotesToggle] = useState(true);

  let handleButtonClick = () => {
    showNotesToggle(!showNotes);

  }
  
  return (
    <div>
      <Header/>
      <Button name="Show" hideName="Hide" handleButtonClick={handleButtonClick} showText={showNotes}/>
      {showNotes && <Notes/>}
    </div>
  );
}

export default App;
