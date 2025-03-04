import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: { name: string } | null;
}

const initialState: UserState = { user: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string }>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
