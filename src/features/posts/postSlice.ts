import { createStore } from "@reduxjs/toolkit";

const initialState = {[
  {
  user: {},
  postBody: "",
  numLikes: 0,
  },
]
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});
