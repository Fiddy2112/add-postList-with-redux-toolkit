import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./PostSlice";
import { selectAllUsers } from "../users/userSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    console.log("Title: ", e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
    console.log("Content: ", e.target.value);
  };

  const onAuthorsChange = (e) => {
    setUserId(e.target.value);
    console.log("Author: ", e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        // addPost({
        //   id: nanoid(),
        //   title,
        //   content,
        // })
        addPost(title, content, userId)
      );
      setTitle("");
      setContent("");
    }
  };

  // Co the thay the cho Author bang {userOptions} cho clean code hon
  // const userOptions = users.map((user) => (
  //   <option key={user.id} value={user.id}>
  //     {user.name}
  //   </option>
  // ));

  const checker = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          placeholder="add post"
          value={title}
          onChange={onTitleChange}
        />

        <label htmlFor="postContent">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          name="postAuthor"
          onChange={onAuthorsChange}
        >
          <option value="">Select Author</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />

        <button type="button" onClick={onSubmit} disabled={!checker}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
