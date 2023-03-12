import React, { useState } from "react";

/*
Consider below example 
Everytime your text changes all the three components ReactMemoProblem,List,ListItem renders
 because there is a change in state of the ReactMemoProblem component, List and ListItem are its child components
 Which also gets re-rendered, even though there isn't necessity . The item is added only when we click on "addUser" button
 So if you see the console, you can see the logs multiple times  
 
The above might not be a problem in this case once your users grow then i might cause slow performance due to multiple re-renderings

 To solve the above said problem we use React.memo
Now only ReactMemoSolution re-rendered because of state, on addUser btn click, ListItem, List are rendered
React.memo is followed bt ListItem too because, List is applied with memo

However if you see , onclick of addUser btm ListItem is rendered thrice, 2 times for existing users
1 time for new user, 

We can memoize the LIstItem only to render for newly added user using React.memo

*/

const ReactMemoSolution = () => {
  console.log("Render Solution: App");
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

const List = React.memo (({ list }) => {
  console.log("Render Solution: List");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ item }) => {
  console.log("Render Solution: ListItem");
  return <li>{item.name}</li>;
});

export default ReactMemoSolution