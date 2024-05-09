import React from 'react'
import Login from './auth/Login'
import { Routes, Route } from 'react-router-dom';


function App () {
  return (
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
  )
}

export default App