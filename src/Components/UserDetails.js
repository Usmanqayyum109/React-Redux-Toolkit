import React from "react";
import DeleteAllUsers from "./DeleteAllUsers";
import { FakeData } from "./FakeData";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./UserSlice";
import { useSelector } from "react-redux";

function UserDetails() {
  const dispatch = useDispatch();
  //   console.log(dispatch);

  const data = useSelector((state) => {
    return state.users;
  });

  const addNewUser = (name) => {
    // console.log(name);
    dispatch(addUser(name));
  };

  const removeuser = (index) => {
    dispatch(removeUser(index));
  };

  return (
    <div>
      <div>
        <h1>List of Users Details</h1>
        <button onClick={() => addNewUser(FakeData())}>Add New Users</button>
        <br />
        <ul>
          {data.map((value, index) => {
            return (
              <div key={index}>
                <li>{value}</li>
                <button onClick={() => removeuser(index)}>DELETE</button>
              </div>
            );
          })}
        </ul>

        <hr />
        <DeleteAllUsers />
      </div>
    </div>
  );
}

export default UserDetails;
