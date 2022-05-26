import { useDispatch } from "react-redux";
import { reactionAdded } from "./PostSlice";

import React from "react";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕️",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      className="reactionButton"
      onClick={() =>
        dispatch(
          reactionAdded({
            postId: post.id,
            reaction: name,
          })
        )
      }
    >
      {emoji} {post.reactions[name]}
    </button>
  ));
  return <div>{reactionButtons}</div>;
};

export default ReactionButton;
