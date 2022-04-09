import { createContext, useState } from "react";
import { UserSignIn } from "../data/user";

export const UserContext = createContext();

export function UserProvider({ children }) {
    // const [user, setUser] = useState(() => {
    //     const e = localStorage.getItem("User")
    //     const intialValue = JSON.parse(e)
    //     return intialValue || null
    // })

    const [user, setUser] = useState(() => {
        const localUser = localStorage.getItem('User')
        return JSON.parse(localUser)
    })

    async function fetchUser(email, password) {
        const {error, data} = await UserSignIn(email, password)
        if(error) return {error, data: null}
        if(data) {
            setUser(data)
            localStorage.setItem("User", JSON.stringify(data));
            return {error: null, data}
        }
    }

    function userLogout() {
        setUser(null)
        localStorage.removeItem("User");
    }

    const value = {
        user,
        fetchUser,
        userLogout
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}