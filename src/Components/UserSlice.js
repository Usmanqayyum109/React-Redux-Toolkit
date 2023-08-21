import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      //   console.log("hii", action.payload);
      state.splice(action.payload, 1);
    },
    deleteAllUser(state, action) {
      return [];
    },
  },
});
// console.log(User);

export { User };
export const { addUser, removeUser, deleteAllUser } = User.actions;
