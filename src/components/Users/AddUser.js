import React, { useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (Non - Empty Values)",
      });
      return;
    }

    if (+enteredAge.trim() < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    // console.log(enteredUserName, enteredAge);
    const user = {
      id: Math.random().toString(),
      username: enteredUserName,
      age: +enteredAge.trim(),
    };
    // setUserList((prevState) => {
    //   return [user, ...prevState];
    // });
    // console.log(userList);
    props.onAddingNewUser(user);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAge(event.target.value);
  };

  const errorDismissHandler = () => {
    setError();
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onErrorDismiss={errorDismissHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              onChange={usernameChangeHandler}
              value={enteredUserName}
            ></input>
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              onChange={ageChangeHandler}
              value={enteredAge}
            ></input>
          </div>
          <div>
            <Button id="submit-btn" type="submit">
              Add User
            </Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
