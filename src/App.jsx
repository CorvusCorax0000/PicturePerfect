import React from 'react'
import Login from './auth/Login'
import Register from './auth/Register'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';


function App () {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
  )
}

export default App