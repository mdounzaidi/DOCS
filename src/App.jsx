import React from 'react'
import Home from './components/Home'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Home/>
      <Foreground/>
    </div>
  )
}

export default App