import React, { useCallback, useState } from "react";

/*
 UseCallBackSolution ,List and ListItem(2 renders. users.length) will be re-rendered on every textChange , 
 however List and ListItem should render only on AddName button is clicked  , to prevent we use React.memo,

 Even on adding React.memo UseCallBackSolution ,List and ListItem will be re-rendered on every textChange WHY?
 Because removeUserHandler is redefined for every re-render and passed on to subsequent child elements 
 As there is change in props, the re-render continues. 

 To resolve this issue we use useCallBack with a dependency array, in this case the dependency is users
 Only when user is added or removed the rendering of List and ListItem happens . 
 Thus re-renders on text change are prevented
*/

const UseCallBackSolution = () => {
  console.log(" UseCallBackSolution Rendered");
  const [users, setUsers] = useState([
    { id: "1", name: "Alpha" },
    { id: "2", name: "Beta" },
  ]);
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleAddUser = () => {
    setUsers((prevArr) => [
      ...prevArr,
      { id: prevArr[prevArr.length - 1].id + 1, name: text },
    ]);
  };
  const removeUserHandler = useCallback((userId) =>
    setUsers(users.filter(({ id }) => id !== userId)),[users])

  return (
    <div>
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={handleAddUser}>Add User </button>
      <List list={users} onRemoveHandler={removeUserHandler} />
    </div>
  );
};

const List = React.memo(({ list, onRemoveHandler }) => {
  console.log("List Rendered");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemoveHandler={onRemoveHandler} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ item, onRemoveHandler }) => {
  console.log("ListItem Rendered");
  return (
    <li>
      <div>
        <span>{item.name}</span>{" "}
        <button onClick={() => onRemoveHandler(item.id)}>Remove User</button>
      </div>
    </li>
  );
});

export default UseCallBackSolution;
