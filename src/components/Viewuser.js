import Home from "./Home";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

const Viewuser = ({ users }) => {
  const { id } = useParams();
  const user = users.find((item) => item.empId === id);
  return (
    <>
      <div className="view" id="wrapper">
        <Home />
        <Table striped bordered hover>
          <tr>{user.firstName}</tr>
          <tr>{user.lastName}</tr>
          <tr>{user.empId}</tr>
          <tr>{user.city}</tr>
        </Table>
      </div>
    </>
  );
};

export default Viewuser;