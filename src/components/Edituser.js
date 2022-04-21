import Home from "./Home";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Edituser = ({ users, setUsers }) => {
  const { id } = useParams(); // getting the object id (user's employee id)
  const user = users.find((item) => item.empId === id); // retrieving the employee by the employee's employee id
  const [currentUser, setCurrentUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    empId: user.empId,
    city: user.city,
  });
  const navigate = useNavigate();

  const editHandler = () => {
    let index = users.findIndex((item) => item.empId === id); // getting the index of the object that's being edited
    var temp = [...users]; // defining a temp array clone of the users array
    temp[index] = currentUser; // changing/replacing the old object by the new edited object in the clone array
    setUsers(temp); // since the clone array (temp) consists the updated object setting the users array to the clone array (temp)
    navigate("/"); // navigate to homepage
  };

  return (
    <div className="Edit" id="wrapper">
      <Home />
      <div className="form">
        <label>First Name</label>
        <input
          type="text"
          value={currentUser.firstName}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, firstName: e.target.value })
          }
        ></input>
        <label>Last Name</label>
        <input
          type="text"
          value={currentUser.lastName}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, lastName: e.target.value })
          }
        ></input>
        <label>Employee ID</label>
        <input
          type="text"
          value={currentUser.empId}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, empId: e.target.value })
          }
        ></input>
        <label>City</label>
        <input
          type="text"
          value={currentUser.city}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, city: e.target.value })
          }
        ></input>
        <br />
        <br />
        <button onClick={editHandler} className="btn btn-primary">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Edituser;