import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { GetAccounts } from '../data/accounts'
import Navbar from './Navbar/Navbar'

const Dashboard = () => {
    const [accounts, setAccounts] = useState([])
    const { user, userLogout } = useContext(UserContext)
    const token = user.token
    
    const handleLogout = (e) => {
        e.preventDefault()
        userLogout()
    }

    useEffect(() => {
      async function FetchAccounts() {
          const data = await GetAccounts(token)
          setAccounts(data)
      }
      FetchAccounts()
    }, [token])
    

    return (
        <>
            <Navbar />
            <h1>Dashboard</h1>
            <p>Hey! {user.name}</p>
            <button onClick={handleLogout}>Logout</button>

            {accounts && accounts.map(a => (
                <div key={a._id} className='account'>
                    <p>Account Type: {a.accountType}</p>
                    <p>Property: {a.property.address} {a.property.city} {a.property.postCode}</p>
                </div>
            ))}
        </>
    )
}

export default Dashboard