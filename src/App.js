import './App.css';
import ToDo from './components/ToDo'
// import Clock from './Clock';
// import { useState } from 'react';

function App() {
  // const [show, setShow] = useState()
  return (
    <div className="App">
      {/* {show ? <Clock/> : ''}
      <button onClick={() =>{setShow(!show)}}>Click</button> */}
      <ToDo />
    </div>
  );
}

export default App;
