import React from 'react';
import './App.css';
import {CounterClass} from "./components/CounterClass";

function App() {
  return (
    <div className="App">
      <CounterClass count={5}/>
    </div>
  );
}

export default App;
