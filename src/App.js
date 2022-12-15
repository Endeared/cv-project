import React from 'react';
import { useState } from 'react';
import './App.css';
import Education from './components/education'


function App() {

  const [message, setMessage] = useState('');
  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is: ', event.target.value)
  }


  return (
    <div className="App">
        <Education></Education>
    </div>
  );
}


export default App;
