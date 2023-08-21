import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllUser } from "./UserSlice";

function DeleteAllUsers() {
  const dispatch = useDispatch();

  const deleteallUser = () => {
    dispatch(deleteAllUser());
  };
  return <button onClick={() => deleteallUser()}>DeleteAllUsers</button>;
}

export default DeleteAllUsers;
