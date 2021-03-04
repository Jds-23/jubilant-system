import React, { useState } from 'react'
import Login from './components/Login';
import './App.css';
import Home from './components/Home';

function App() {
  const [user,setUser]=useState(null)
  return (
    <div className="App">
      {!user?
      <Login setUser={setUser}/>:<Home user={user}/>}
    </div>
  );
}

export default App;
