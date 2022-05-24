import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "Redux Toolkit",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "Slices",
    content: "Redux Toolkit",
    date: sub(new Date(), { minutes: 20 }).toISOString(),
  },
  {
    id: "3",
    title: "Sleep",
    content: "ZzzZZZzzzZZ",
    date: sub(new Date(), { minutes: 30 }).toISOString(),
  },
];

export const postSlices = createSlice({
  name: "posts",
  initialState,
  reducers: {
    //  addPost: (state)=>{
    //     state.push(action.payload)
    // }

    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postSlices.actions;

export default postSlices.reducer;
