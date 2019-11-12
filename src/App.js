import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ButtonInteraction />   
      </header>
    </div>
  );

}

function ButtonInteraction() {

  const [activeButton, setButton] = useState("")

  function handleClick(event){
    let id = event.target.id;
    setButton(id);
  }

  return (
    <div className="App">
      <button id="You have selected: First Button" className= "button1" onClick={handleClick}>First Button</button>
      <button id="You have selected: Second Button" className= "button2" onClick={handleClick}>Second Button</button>
      <button id="You have selected: Third Button" className= "button3" onClick={handleClick}>Third Button</button>
      {activeButton}
    </div>
  );
}

export default App;
