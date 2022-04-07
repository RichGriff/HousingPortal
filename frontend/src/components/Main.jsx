import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Dashboard from './Dashboard'
import Login from './Login'

const Main = () => {
    const { user } = useContext(UserContext)
    
    return (
        <>
            {/* <Login /> */}
            {user == null ? <Login /> : <Dashboard />}
        </>
    )
}

export default Main