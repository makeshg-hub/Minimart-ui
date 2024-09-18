import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Component/homepage';
import Forgot from './Component/forgotpage';
import Login from './Component/login';
import Register from './Component/register';
import Change from './Component/changepassword';

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/forgotpage" element={<Forgot />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/changepassword" element={<Change />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
