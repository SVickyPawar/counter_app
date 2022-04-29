import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter]=useState(0);
  const handleAdd=()=>{
    setCounter(counter+1)
    console.log(counter) 
  }
  const handleMinus=()=>{
    if(counter==0){
      return;
    }
    setCounter(counter-1)
    console.log(counter) 
  }
  const handleDouble=()=>{
    setCounter(counter*2)
    console.log(counter) 
  }
  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={handleAdd}>Add+1</button>
      <button onClick={handleMinus}>Minus-1</button>
      <button onClick={handleDouble} >Double</button>
    </div>
  );
}

export default App;
