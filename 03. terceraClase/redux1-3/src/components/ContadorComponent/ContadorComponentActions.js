//Definiciones de las acciones
//Estos son los encargados de definir que acciones puedo ejecutar, no lo que harán en el estado, pero si como se llamarán.

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const MODIFY_NAME = 'MODIFY_NAME'
export const MULTIPLICAR = 'MULTIPLICAR'
export const SAVE_MY_NAME = 'SAVE_MY_NAME'

// Creadores/ejecutores de las acciones
//El objetivo de estas funciones es devolver un objeto con un type y un payload que será entendido e interpretado por redux
export const incrementCount = (nuevoValorCount) => {
    return {
        type: INCREMENT,
        payload: {
            nuevoValorCount
        }
    }
}

export const decrementCount = (nuevoValorCount) => {
    return {
        type: DECREMENT,
        payload: {
            nuevoValorCount
        }
    }
}

export const multiplicarCount = (nuevoValorCount) => {
    return {
        type: MULTIPLICAR,
        payload: {
            nuevoValorCount
        }
    }
}

export const modifyName = (newName) => {
    return {
        type: MODIFY_NAME,
        payload: {
            newName
        }
    }
}

export const saveName = (newName) => {
    return {
        type: SAVE_MY_NAME,
        payload: {
            newName
        }
    }
}

// export const load = () => {
//     return {
//         type: LOAD
//     }
// }