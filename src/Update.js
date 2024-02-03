import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: id, name: uname, email: uemail }));
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
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
              value={uname}
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
              value={uemail}
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

export default Update;
