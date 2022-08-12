import React from "react";
import MiddleTopSection from "./middleTopSection";

function MiddleSection({ posts, createPost, deletePost, isAuth }) {
  return (
    <div className='middleSection'>
      <div style={{ height: "auto" }} className='innerMiddleTop'>
        <MiddleTopSection createPost={createPost} isAuth={isAuth} />
      </div>
      <div className='innerMiddleBottom'>
        {posts.map((post) => (
          <div id={post._id} className='post-container'>
            <div className='post-title'>{post.title}</div>
            <div className='post-content'>{post.content} </div>
            {isAuth ? (
              <div className='btn-del'>
                <button onClick={() => deletePost(post)}>Delete</button>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiddleSection;
