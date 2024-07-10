import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import C1_3 from './component/ReactMemoShallowEquality';
import SampleComponent from './component/SampleComponent';

function App() {
  const [_, setCounter] = useState(0);

  const onClick = () => {
    setCounter((prev) => prev + 1);
  }

  return (
    <div className="App">
      <C1_3></C1_3>
      <button onClick={onClick}>+</button>

      <SampleComponent></SampleComponent>
      {/* <SampleComponent hello="world"></SampleComponent> */}
    </div>
  );
}

export default App;
