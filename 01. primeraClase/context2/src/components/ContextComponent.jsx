import React, { useContext } from 'react'
import Context from '../core/context/Context'

function ContextComponent() {

    const {
        name
  } = useContext(Context)


  return (
    <div>
        <hr />
      Valor appName desde el context: {name}
    </div>
  )
}

export default ContextComponent
