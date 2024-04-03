import { Button, FormControl, TextField } from "@mui/material"
import { useState } from "react"
import { Form } from "react-router-dom"
import { useAuthContext } from "../auth/AuthContext"

const LoginForm = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const context = useAuthContext()

    const handleSubmit = () => {
        // alert('login')
        // const formData = { userName, password }
        // console.log(formData)
        context.login({ userName, password })
    }

    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }

    }
    return (
        <form>
            <FormControl>
                <h2>Login Form</h2>
                <TextField label="Username" name='username' margin="normal" onChange={handleChange} />
                <TextField label="Password" name='password' margin="normal" onChange={handleChange} type='password' />
                <Button variant="contained" onClick={handleSubmit}>Login</Button>
            </FormControl>
        </form>
    )
}

export default LoginForm