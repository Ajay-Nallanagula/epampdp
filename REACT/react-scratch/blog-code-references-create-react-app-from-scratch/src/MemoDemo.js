import React, { useCallback, useMemo, useState } from 'react'

const ListFilteredUsers = React.memo(({ users, onRemove }) => {
    console.log('ListFilteredUsers' + ' is been rendered')
    if (!users?.length) {
        return <div>Select a user</div>
    }

    return (
        <div>
            <ul>
                {
                    users.map(user => <li key={user.id}>
                        <button onClick={() => {
                            console.log('onRemove', user)
                            onRemove()
                        }}>
                            Remove name {user.name}
                        </button>

                    </li>)
                }
            </ul>
        </div>
    )

})

const MemoCallback = () => {
    const [text, setText] = useState('')
    const [searchText, setSearchText] = useState('')

    const users = [
        { id: 10, name: 'Ajay' },
        { id: 11, name: 'Vijay' },
        { id: 12, name: 'Jaya' },
    ]

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    //Assume this an expensive Operation
    //This will be created on every text change, 
    //Ideally this should be created only when there is a change in searchText
    const filterUsers = useMemo(() => users.filter(user => {
        console.log(`user is searched`, user)
        return user.name.toLowerCase() === searchText.toLowerCase()
    }), [searchText])

    const onRemoveHandler = useCallback(() => {
        console.log('This is remove Handler')
        // filterUsers = filterUsers?.length && filterUsers.filter(u => u.name = user.name)
    }, [searchText])//useCallback(, [])

    return (
        <div>
            <label htmlFor="searchTxt">Search User</label>
            <input type="text" name="searchTxt" onChange={e => handleTextChange(e)}></input>
            <button onClick={() => setSearchText(text)}>Click to search</button>

            <ListFilteredUsers users={filterUsers || []} onRemove={onRemoveHandler}></ListFilteredUsers>
        </div>
    )
}

export default MemoCallback