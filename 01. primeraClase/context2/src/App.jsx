import { useState } from 'react'

import './App.css'
import GlobalState from './core/context/GlobalState'
import ContextComponent from './components/ContextComponent'

function App() {

  return (
    <GlobalState>
      <ContextComponent />
    </GlobalState>
  )
}

export default App
