import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Adduser = ({
  setFirstName,
  firstName,
  lastName,
  setLastName,
  empId,
  setEmpId,
  city,
  setCity,
  users,
  setUsers,
}) => {
  const navigate = useNavigate(); // this will let us navigate to the homepage after adding the setUsers
  // defining a function to add users one by one to the array
  const addHandler = () => {
    setUsers([
      ...users,
      {
        firstName: firstName,
        lastName: lastName,
        empId: empId,
        city: city,
      },
    ]);
    setFirstName("");
    setLastName("");
    setEmpId("");
    setCity("");
    navigate("/"); //navigates to homepage
  };
  return (
    <div className="Add" id="wrapper">
      <Home />
      <div className="form">
        <label>First Name</label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label>Last Name</label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <label>Employee ID</label>
        <input type="text" onChange={(e) => setEmpId(e.target.value)}></input>
        <label>City</label>
        <input type="text" onChange={(e) => setCity(e.target.value)}></input>
        <br />
        <br />
        <button onClick={addHandler} className="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  );
};

export default Adduser;