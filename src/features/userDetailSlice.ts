import { createSlice } from "@reduxjs/toolkit";

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
});

export default userDetailSlice.reducer;
