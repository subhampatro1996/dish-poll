import './App.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
function App() {
  const [userLoggedIn,setUserLoggedin] = useState(false)
  const toggle = ()=>{
    setUserLoggedin(!userLoggedIn)
  }
  useEffect(()=>{
    if(localStorage.getItem('user')){
      toggle()
    }
  },[])
  return (
    <div className="App">
        <Navbar userLoggedIn={userLoggedIn} toggle={toggle}/>
    </div>
  );

}

export default App;
