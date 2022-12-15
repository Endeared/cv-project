import React from 'react';
import { useState } from 'react';
import './App.css';
import General from './components/general'
import Experience from './components/experience'
import Education from './components/education'
import Form from './components/form'


function App() {
  const [message, setMessage] = useState('');
  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is: ', event.target.value)
  }


  return (
    <div className="App">
        <General></General>
        <Experience></Experience>
        <Education></Education>
        <Form></Form>
    </div>
  );
}


export default App;
