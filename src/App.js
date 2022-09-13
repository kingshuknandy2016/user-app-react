import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addNewUserHandler = (userData) => {
    setUserList((prevState) => {
      return [userData, ...prevState];
    });
    //console.log(userList);
  };

  return (
    <React.Fragment>
      <AddUser onAddingNewUser={addNewUserHandler} />
      <UserList users={userList} />
    </React.Fragment>
  );
}

export default App;
