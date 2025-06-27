import { LOAD_USERS, SELECT_USER } from "./UsersComponentActions"


const initialState = {
    users: undefined,
    userSelected: undefined
}

const usersComponentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        case SELECT_USER:
            return {
                ...state,
               userSelected: action.payload.user
            }
        default:
            return state
    }
}

export default usersComponentReducer