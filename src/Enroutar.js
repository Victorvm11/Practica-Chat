import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './App'
import Login from './Login'
 
 
export default function App(){
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="login" element={<Login />} >
        </Route>
    </Routes>
  </BrowserRouter>
  )
};
