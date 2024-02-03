import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSumit}>
          <div className="">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id=""
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id=""
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <br />
          <button className="btn btn-info" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
