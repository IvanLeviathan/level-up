import React, { useState } from 'react';
import Header from './components/header';
import Button from './components/button';
import Text from './components/text';
function App() {
  const [showText, showTextToggle] = useState(true);

  let handleButtonClick = () => showTextToggle(!showText);
  
  return (
    <div>
      <Header/>
      <Button name="Show" hideName="Hide" handleButtonClick={handleButtonClick} showText={showText}/>
      <Text  showText={showText} text='Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'/>
    </div>
  );
}

export default App;
