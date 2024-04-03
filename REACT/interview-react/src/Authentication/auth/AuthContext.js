import React, { useContext } from 'react'

const AuthContext = React.createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}
export const { Provider, Consumer } = AuthContext

export default AuthContext