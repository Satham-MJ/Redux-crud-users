import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../UserReducer";

const DataRow = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">
          Edit
        </Link>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            dispatch(deleteUser({ id: user.id }));
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DataRow;
