import React, { useMemo } from "react";

/*
Consider the below example , filteredUsers run for every inputchange
Even though the filteredUsers don't change when someone types into the input field, because they 
change only when clicking the button via the search state

For a small demo like this might not make a big difference but 
what happens when there are 1000 names to lookup? You application might slow down

you can use React's useMemo Hook to memoize a functions return value(s) and to run a 
function only if its dependencies (here search) have changed
*/

const users = [
  { id: 1, name: "Alpha" },
  { id: 2, name: "Beta" },
];

const UseMemoSolution = () => {
  const [text, setText] = React.useState("");
  const [search, setSearch] = React.useState("");

  const handleText = (e) => setText(e.target.value);
  const handleSearch = () => setSearch(text);
  const filteredUsers = useMemo(() =>{
   return(users.filter((user) => {
     console.log('useMemo Solution filtered users running...')
    return user.name.toLowerCase().includes(search.toLowerCase());
  }))},[search]);

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default UseMemoSolution;
