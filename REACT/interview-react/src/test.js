const UserList = () => {
    const [users, setUsers] = useState([]);
    const [friends, setFriends] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const addFriend = (friend) => {
        setFriends([...friends, friend]);
    };

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => addFriend(user)}>Add Friend</button>
                    </li>
                ))}
            </ul>
            <h2>Friends</h2>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id}>{friend.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;