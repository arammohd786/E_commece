import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login'; // you can create this component later

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
