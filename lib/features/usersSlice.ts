import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  id: "1",
  name: "Madison Greg",
  email: "madison.reertr@soludesks.com",
  isAuthenticated: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => action.payload,
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
