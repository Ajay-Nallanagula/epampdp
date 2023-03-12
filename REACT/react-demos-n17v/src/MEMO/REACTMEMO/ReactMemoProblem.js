import React, { useState } from "react";

/*
Consider below example 
Everytime your text changes all the three components ReactMemoProblem,List,ListItem renders
 because there is a change in state of the ReactMemoProblem component, List and ListItem are its child components
 Which also gets re-rendered, even though there isn't necessity . The item is added only when we click on "addUser" button
 So if you see the console, you can see the logs multiple times    
*/

const ReactMemoProblem = () => {
  console.log("Render: App");
  const [users, setUsers] = useState([
    { id: 1, name: "Ajay" },
    { id: 2, name: "Kumar" },
  ]);

  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleAddUser = () =>
    setUsers(users.concat({ id: users[users.length - 1].id + 1, name: text }));
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAddUser}>Add User </button>
      <List list={users} />
    </div>
  );
};

const List = ({ list }) => {
  console.log("Render: List");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  console.log("Render: ListItem");
  return <li>{item.name}</li>;
};

export default ReactMemoProblem