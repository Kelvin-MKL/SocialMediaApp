import React from "react";

function MiddleTioSection() {
  return (
    <div className='post-container'>
      <div className='post-title'>
        <input
          placeholder='Insert title here...'
          style={{ outline: "none", border: "none", width: "100%" }}
        ></input>
      </div>
      <div className='post-content'>
        <input
          placeholder='Insert content here...'
          style={{ outline: "none", border: "none", width: "100%" }}
        ></input>
      </div>
      <button style={{ marginTop: "5px" }}>Post</button>
    </div>
  );
}

export default MiddleTioSection;
