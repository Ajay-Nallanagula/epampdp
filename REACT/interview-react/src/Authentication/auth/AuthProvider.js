import { useState } from "react"
import { Provider } from "./AuthContext"
import { useNavigate } from "react-router-dom"

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')
    const [token, setToken] = useState(localStorage.getItem('token' || ''))
    const navigation = useNavigate()
    console.log(navigation, token)

    const login = async ({ userName, password }) => {
        // const resp = await fetch('https://dummyjson.com/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         username: userName,
        //         password
        //     })
        // })

        // const loggedIn = await resp.json()
        const resolvePromise = true

        const loginPromise = () => new Promise((resolve, reject) => {
            if (resolvePromise) {
                resolve({
                    data: {
                        "id": 15,
                        "username": userName,
                        "password": password,
                        "firstName": "Jeanne",
                        "lastName": "Halvorson",
                        "gender": "female",
                        "image": "https://robohash.org/Jeanne.png?set=set4",
                        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
                    }
                })
                reject(new Error('Credentials are wrong'))
            }
        })

        const loggedIn = await loginPromise()

        if (loggedIn.data) {
            setToken(loggedIn.data.token)
            setUser(loggedIn.data.username)
            localStorage.setItem('token', loggedIn.data.token)
            navigation('/dashboard')
            return;
        }


    }
    const logOut = () => {
        setToken('')
        setUser('')
        localStorage.removeItem('token')
        navigation('/')
    }

    console.log('xxxxxxx', { user })
    return (

        <Provider value={{ user, token, login, logOut }}>
            {children}
        </Provider>
    )
}

export default AuthProvider