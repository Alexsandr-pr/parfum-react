import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../../reducers/userReducer'


const Exit = () => {
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(logout())}>Exit</button>
    )
}

export default Exit