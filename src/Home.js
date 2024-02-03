import React from "react";
import { useSelector } from "react-redux";
import DataRow from "./Components/DataRow";
import { Link } from "react-router-dom";

const Home = () => {
  const users = useSelector((state) => state.users);
  return (
    <div className="container">
      <h2>Crud App with JSON Sever</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <DataRow key={index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
