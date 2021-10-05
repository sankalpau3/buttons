import React, { useEffect } from 'react';
import './App.css';

const BasicApp = () => {
  for (var i = 1; i < 6; i++) {
    var body = document.body;
    var button = document.createElement('button', {abc:`${i}`});
    button.innerHTML = `Button ${i}`;
    // eslint-disable-next-line no-loop-func
    button.onclick = (event) => {
      alert(`I am ${event.target.innerHTML}`);
    }
    body.appendChild(button);
  }
  return;
}
function App() {
  
  useEffect(
    () => {
      BasicApp();
    },[]
  )
  return (
   <></>
  );
}

export default App;
