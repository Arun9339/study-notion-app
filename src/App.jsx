import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/SIgnup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';

import "./App.css";
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedeIn] = useState(false);
  return (
    <>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedeIn={setIsLoggedeIn}/>

        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />


        </Routes>
      </div>


    </>
  );
}

export default App;
