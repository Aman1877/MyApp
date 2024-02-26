import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    email: "",
  },
  reducers: {
    // addUser(state: any, action: any) {
    //   state.userName = action.payload.userName;
    //   state.email = action.payload.email;
    // },
  },
});

export default userSlice.reducer;
// export const { addUser } = userSlice.actions;
