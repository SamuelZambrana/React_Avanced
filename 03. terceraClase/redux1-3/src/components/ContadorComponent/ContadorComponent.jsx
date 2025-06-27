import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount, modifyName, multiplicarCount, saveName} from './ContadorComponentActions'

const ContadorComponent = () => {
//   const [count, setCount] = useState(0)
    const [name, setName ] = useState(undefined)
    const [myNameP, setMyNameP] = useState(undefined)

    const dispatch = useDispatch()

// useSelector es un hook que me permite traerme el estado que necesite de redux
    const count = useSelector( (state) => state.contadorComponentReducer.count)
    const countName = useSelector( (state) => state.contadorComponentReducer.countName)
    const myNameTitle =  useSelector( (state) => state.contadorComponentReducer.myName)
  /* 
    Acciones: 
        INCREMENT => Va a incrementar en uno el contador
        DECREMENT => Va a decrementar en uno el contador
  */

    const lanzarAccionIncrement = () => {
        dispatch(incrementCount(count + 1))
    }

    const lanzarDecrement = () => {
      dispatch(decrementCount(count - 1))
    }

    const lanzarMultiplicar = () => {
      dispatch(multiplicarCount(count * 2))
    }


    const lanzarCambioDeNombre = () => {
        //TODO: fkeofkseofkeo
        dispatch(modifyName(name))
    }

      const lanzarMiNombre = () => {
        //TODO: fkeofkseofkeo
        dispatch(saveName(myNameP))
    }

  return (
    <div>
        <h1>Esto esta echo por: {myNameTitle}</h1>
        <hr />
        <h1>{countName} is {count}</h1>
        <button onClick={lanzarAccionIncrement}>
          Incrementar
        </button>
        <button onClick={lanzarDecrement}>
          Decrementar
        </button>
        <button onClick={lanzarMultiplicar}>
          Multiplicar x2
        </button>
        <div>
          <span>Nombre contador: </span>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
          <button onClick={lanzarCambioDeNombre}>Guardar Nombre</button>
        </div>
        <div>
         <span>Mi Nombre: </span>
          <input type="text" onChange={(e) => setMyNameP(e.target.value)}/>
          <button onClick={lanzarMiNombre}>Guardar mi Nombre</button>
        </div>
    </div>
  )
}

export default ContadorComponent