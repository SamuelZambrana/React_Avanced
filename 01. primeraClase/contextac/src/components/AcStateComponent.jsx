import React, { useContext } from 'react'
import Context from '../core/context/Context'

const AcStateComponent = () => {
    const {
        acState,
        changeAcState
    } = useContext(Context)
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        El aire acondicionado esta: {acState ? 'encendido' : 'apagado'}

        <button onClick={changeAcState}>
            {acState ? 'Apagar' : 'Encender' }
        </button>
    </div>
  )
}

export default AcStateComponent