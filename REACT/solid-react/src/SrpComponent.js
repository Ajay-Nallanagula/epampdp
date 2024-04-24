/*
Problem: Consider a component called “UserProfile” which is responsible for displaying the
 user’s profile information as well as fetching the data from the API. This violates the 
 SRP as the component has two responsibilities, data retrieval, and display. 
 To adhere to the SRP, we can split this component into two separate components,
  “UserProfileDisplay” and “UserProfileFetcher”.
*/

import { useEffect, useState } from "react"
import withToggle from "./withToggle"

//Problem
const UserProfile = ({ toggle, handleToggle }) => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        const fetchUsers = () => {
            fetch('https://dummyjson.com/users')
                .then(res => res.json())
                .then(({ users }) => setUsers(users));
        }

        fetchUsers()
    }, [])

    return (
        <>
            {/* <div style={{ display: toggle ? 'none' : 'block' }}>
                <ul>
                    {users.map(user => <li>{`${user.firstName}  ${user.lastName}`}</li>)}
                </ul>
                <br />
            </div>
            <div>
                <button onClick={handleToggle}>Toggle Profile</button>
            </div> */}
            <UserProfileDisplay users={users} toggle={toggle} handleToggle={handleToggle} />
        </>
    )
}

export default withToggle(UserProfile)

const UserProfileDisplay = ({ users, toggle, handleToggle }) => {
    return (
        <>
            <div style={{ display: toggle ? 'block' : 'none' }}>
                <ul>
                    {users.map(user => <li>{`${user.firstName}  ${user.lastName}`}</li>)}
                </ul>
            </div>
            <div>
                <button onClick={handleToggle}>Toggle Profile</button>
            </div>
        </>
    )
}


