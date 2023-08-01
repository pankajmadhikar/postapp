import React from "react";

const PostsGenerator = ({
  post,
  setPost,
  name,
  setName,
  AddEvent,
  toggleBtn,
}) => {
  return (
    <div>
      <div className="generator" style={{ marginTop: "50px" }}>
        <textarea
          name=""
          value={post}
          onChange={(e) => setPost(e.target.value)}
          id=""
          placeholder="Write your post....."
          cols="30"
          rows="10"></textarea>
        <input
          type="text"
          placeholder="Enter name....."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {toggleBtn ? (
          <button className="main-edit-btn" onClick={AddEvent}>
            Edit
          </button>
        ) : (
          <button className="post-btn" onClick={AddEvent}>
            Post
          </button>
        )}
      </div>
    </div>
  );
};

export default PostsGenerator;
