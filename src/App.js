import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert'
import About from './components/About'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'

function App() {
  //state
  const[mode,setmode]=useState('light')
  const[alert,setalert]=useState(null)

  const showalert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }

  const togglemode=()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showalert("Dark mode enabled","success")
    }else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Light mode enabled","success")
    }
  }
  return (
<>   
<Router>
{/* <Navbar title="TextUtils!!" abouttext="About TextUtils"/> */}

<Navbar title="TextUtils!!" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>

<div className="container my-3">
<Routes>
      <Route exact path='/About'
        element={<About mode={mode}/>}
      />
      <Route exact path='/'
      element={<Textform heading='Enter the Text to Analyze below' mode={mode} showalert={showalert} />}
      />
</Routes>
</div>
</Router> 
    </>
  );
}

export default App;
