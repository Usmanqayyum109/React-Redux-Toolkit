import { configureStore } from "@reduxjs/toolkit";

import { User } from "./UserSlice";

const Store = configureStore({
  reducer: {
    users: User.reducer,
  },
});
// console.log(Store);

export default Store;
