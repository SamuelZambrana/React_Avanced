import React, { useState } from 'react'
import Context from './Context'

const GlobalState = ({children}) => {

    const [acState, setAcState] = useState(true)

    const changeAcState = () => {
        setAcState(!acState)
    }

  return (
    <Context.Provider value={{
        acState,
        changeAcState
    }}>
        {children}
    </Context.Provider>
  )
}

export default GlobalState