import { createContext, useState } from "react"

export const UserContext = createContext()
UserContext.displayName = "User"

export const UserProvider = ({ children }) => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkEmail, setCheckEmail] = useState(false)

    return (
        <UserContext.Provider value={{
            name,
            setName,
            lastName,
            setLastName,
            email,
            setEmail,
            password,
            setPassword,
            checkEmail,
            setCheckEmail,
        }}>
            {children}
        </UserContext.Provider>
    )
}