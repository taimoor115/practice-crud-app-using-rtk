import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: undefined,
};

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      });
  },
});

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const res = await fetch(
      "https://65fa8ab83909a9a65b1aa217.mockapi.io/Crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default userDetailSlice.reducer;
