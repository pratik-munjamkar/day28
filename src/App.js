import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//importing components
import Userlist from "./components/Userlist";
import Adduser from "./components/Adduser";
import Edituser from "./components/Edituser";
import Viewuser from "./components/Viewuser";

const App = () => {
  // creating states for users and all user properties
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [empId, setEmpId] = useState("");
  const [city, setCity] = useState("");
  const [users, setUsers] = useState([]);
  return (
    //routing components
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Userlist users={users} setUsers={setUsers} />}
          ></Route>
          <Route
            exact
            path="/Adduser"
            element={
              <Adduser
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                empId={empId}
                setEmpId={setEmpId}
                city={city}
                setCity={setCity}
                users={users}
                setUsers={setUsers}
              />
            }
          ></Route>
          <Route
            exact
            path="/View/:id"
            element={<Viewuser users={users} />}
          ></Route>
          <Route
            exact
            path="/Edit/:id"
            element={
              <Edituser
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                empId={empId}
                setEmpId={setEmpId}
                city={city}
                setCity={setCity}
                users={users}
                setUsers={setUsers}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;