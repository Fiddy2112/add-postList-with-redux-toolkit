import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./PostSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  //   const posts = useSelector((state) => state.posts);

  //   const renderPosts = posts.map((post) => (
  //     <article key={post.id}>
  //       <h3>{post.title}</h3>
  //       <p>{post.content.substr(0, 100)}</p>
  //     </article>
  //   ))

  return (
    <section>
      <h2>Posts</h2>
      {orderedPosts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p style={{ overflow: "hidden" }}>{post.content}</p>

          <p className="postCredit">
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
          </p>
          <ReactionButton post={post} />
        </article>
      ))}
    </section>
  );
};

export default PostsList;
