import React from 'react';
import './App.css';
import {CounterClass} from "./components/CounterClass";
import {CounterFunction} from "./components/CounterFunction";

function App() {
  return (
    <div className="App">
      <CounterClass count={5}/>
      <CounterFunction count={3} />
    </div>
  );
}

export default App;
