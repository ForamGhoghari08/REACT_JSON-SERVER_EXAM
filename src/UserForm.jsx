// IMPORTING NECESSARY MODULES
import React, { useEffect, useState } from "react";
import ApiClient from "./config/ApiClient"; // CHANGED FROM "API" TO "ApiClient"

const UserForm = () => { // UPDATED COMPONENT NAME
  // STATE TO HANDLE USER INPUT
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    age: "",
  });

  // STATE TO STORE LIST OF USERS
  const [userList, setUserList] = useState([]);

  // HANDLING INPUT CHANGE
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  // FUNCTION TO CREATE A NEW USER
  const createUser = async (user) => {
    try {
      let res = await ApiClient.post("/users", user);
      console.log(res.data);
      setUserList([...userList, res.data]);
    } catch (error) {
      console.log("COULDN'T CREATE USER", error);
    }
  };

  // FUNCTION TO FETCH ALL USERS
  const getUsers = async () => {
    try {
      let res = await ApiClient.get("/users");
      console.log(res.data);
      setUserList(res.data);
    } catch (error) {
      console.log("COULDN'T FETCH USERS", error);
    }
  };

  // FUNCTION TO DELETE A USER
  const handleDelete = async (id) => {
    try {
      await ApiClient.delete(`/users/${id}`);
      setUserList(userList.filter((user) => user.id !== id));
    } catch (error) {
      console.log("COULDN'T DELETE USER", error);
    }
  };

  // FETCH USERS ON COMPONENT MOUNT
  useEffect(() => {
    getUsers();
  }, []);

  // HANDLING FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(userDetails);
    setUserDetails({
      name: "",
      email: "",
      age: "",
    });
  };

  return (
    <div>
      {/* FORM FOR USER INPUT */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={handleInput}
          placeholder="Username..."
        />
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleInput}
          placeholder="Email..."
        />
        <input
          type="number"
          name="age"
          value={userDetails.age}
          onChange={handleInput}
          placeholder="Age..."
        />
        <input type="submit" value="Add User" />
      </form>

      {/* DISPLAYING USERS */}
      <div>
        {userList.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.age}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserForm;
