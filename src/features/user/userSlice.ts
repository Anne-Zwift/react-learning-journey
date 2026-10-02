import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchUserDataApi } from '../../api/mockUserApi';


interface UserState {
  userName: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  userName: '',
  status: 'idle',
  error: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', 
  async () => {
  const data = await fetchUserDataApi();
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },

    logout(state) {
      state.userName = initialState.userName;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userName = action.payload.name;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
