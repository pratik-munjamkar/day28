import Home from "./Home";
import ListItem from "./ListItem";
import { Table } from "react-bootstrap";

const Userlist = ({ users, setUsers }) => {
  return (
    <div className="userlist" id="wrapper">
      <Home />
      <Table striped bordered hover>
        <tr className="text-center">
          <th>Sr. No.</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>EmpID</th>
          <th>City</th>
          <th>Action</th>
        </tr>
        {users.map((user, i) => (
          <ListItem
            user={user}
            users={users}
            setUsers={setUsers}
            count={i + 1}
          />
        ))}
      </Table>
    </div>
  );
};

export default Userlist;