import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialState = {
  messages: [],
  isMessagesLoading: false,
  isMessagesError: false,
  errorMessages: null,
};

// ************************** GET ALL MESSAGES ******************************
export const getMessages = createAsyncThunk(
  "GET_MESSAGES",
  async (thunkAPI) => {
    return await axiosWithAuth()
      .get(
        `${
          import.meta.env.VITE_APP_URL
        }/api/auth/message/listmessages?userid=${localStorage.getItem("id")}`
      )
      .then((response) => response.data)
      .catch((error) => thunkAPI.rejectWithValue(error.response.data.message));
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMessages.pending, (state, action) => {
      state.messages = [];
      state.isMessagesLoading = true;
      state.isMessagesError = false;
      state.errorMessages = null;
    });
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.isMessagesLoading = false;
      state.isMessagesError = false;
      state.errorMessages = null;
    });
    builder.addCase(getMessages.rejected, (state, action) => {
      state.messages = [];
      state.isMessagesLoading = false;
      state.isMessagesError = true;
      state.errorMessages = action.payload;
    });
  },
});

export default messagesSlice.reducer;
