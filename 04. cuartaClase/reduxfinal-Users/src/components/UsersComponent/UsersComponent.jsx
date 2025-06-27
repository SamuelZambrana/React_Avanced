import React from 'react'
import { getAllUsers } from '../../core/services/usersFetch'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadUsers, selectUser } from './UsersComponentActions'

const UsersComponent = () => {

    const dispatch = useDispatch()

    const users = useSelector((state) => state.usersComponentReducer.users)
    const userSelected = useSelector((state) => state.usersComponentReducer.userSelected)

    const load = () => {
        const aux = getAllUsers()
        //Setear en el reducer
        dispatch(loadUsers(aux))
    }

    const selectUserHanlder = (user) => {
        dispatch(selectUser(user))
    }

    useEffect(() => {
        load()
    },[])

  return (
    <div>
        {
            !users ? (
                <div>Cargando datos...</div>
            ) : users.length <= 0 ? (
                <div>No hay elementos</div>
            ) : (
                users.map((u, idx) => (
                    <div key={idx} style={{display: 'flex', gap: 50}}>
                        <span>{u.id}</span>
                        <span>{u.username}</span>
                        <span>{u.password}</span>
                        <button onClick={() => selectUserHanlder(u)}>Seleccionar</button>
                    </div>
                ))
            )
        }
        <hr />
        {
            !userSelected ? (
                <div>No hay usuario seleccionado</div>
            ) : (
                <div>{JSON.stringify(userSelected)}</div>
            )
        }
    </div>
  )
}

export default UsersComponent