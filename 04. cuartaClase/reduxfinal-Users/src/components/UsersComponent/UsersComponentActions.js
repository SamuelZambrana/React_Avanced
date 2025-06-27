
//Definidores de acción
export const LOAD_USERS = 'LOAD_USERS'
export const SELECT_USER = 'SELECT_USER'


//Creadores de acción

//payload en el parametro de la función va a ser un objeto que va a recibr X propiades.
// export const loadMoviles = (payload) => {
//     return {
//         type: LOAD_MOVILES,
//         payload
//     }
// }
export const loadUsers = (users) => {
    return {
        type: LOAD_USERS,
        payload: {
            users
        }
    }
}

export const selectUser = (user) => {
    return {
        type: SELECT_USER,
        payload: {
            user
        }
    }
}