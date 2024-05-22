import React, { useCallback, useEffect, useState } from "react"

const CallBackDemo = () => {
    const [message, setMessage] = useState()
    const [msgText, setMsgText] = useState()

    const handleMessageChange = (e) => {
        setMsgText(e.target.value)
    }


    const asyncCall = useCallback(() => {
        return new Promise((resolve, reject) => {
            if (message) {
                return resolve({ message })
            }
            return reject(new Error("Promise is rejected please recheck"))
        })
    }, [message])


    useEffect(() => {
        asyncCall().then(response => {
            return response
        }).then(jsonfied => {
            setMessage(jsonfied.message)
        })
    }, [asyncCall])

    return <div>
        <h2> Callback demo</h2>
        <div>{message}</div>
        <div>
            <label>Change Message </label>
            <input type="text" onChange={(e) => handleMessageChange(e)}></input>

            <button onClick={() => setMessage(msgText)}>Change Message</button>
            <div>You cannot call inside the button because you can hit the button many times the call will go irrespective the message have changed or not </div>
        </div>
    </div>
}

export default CallBackDemo