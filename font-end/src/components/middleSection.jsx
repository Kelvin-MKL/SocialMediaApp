import React, { useState } from "react";
import MiddleTopSection from "./middleTopSection";

function MiddleSection() {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      title: "post1",
      content: "G'day",
    },
    {
      _id: "2",
      title: "post2",
      content: "running out of time!",
    },
    {
      _id: "3",
      title: "post3",
      content: "getting hungry!",
    },
    {
      _id: "4",
      title: "post4",
      content: "Woww!",
    },
    {
      _id: "5",
      title: "post5",
      content: "Ready to go~!",
    },
  ]);

  return (
    <div className='middleSection'>
      <MiddleTopSection />
      {posts.map((post) => (
        <div id={post._id} className='post-container'>
          <div className='post-title'>{post.title}</div>
          <div className='post-content'>{post.content} </div>
        </div>
      ))}
    </div>
  );
}

export default MiddleSection;
