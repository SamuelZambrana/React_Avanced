import React, { useState } from 'react'
import Context from './Context'

const GlobalState = ({children}) => {

    const [name, setName] = useState('Samuel')


  return (
    <Context.Provider value={{
       name
    }}>
        {children}
    </Context.Provider>
  )
}

export default GlobalState