import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {

  return (
    <div>
      <NavBar />
      <main className='main'>
        <Routes>
          <Route path='/' exact Component={Home} />
        </Routes>
      </main>
    </div>
  )
}

export default App
