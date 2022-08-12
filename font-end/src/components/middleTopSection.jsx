import React, { useRef } from "react";
import useUser from "../helper/userContext";

function MiddleTopSection() {
  const { isAuth, addPost } = useUser();
  const titleRef = useRef();
  const contentRef = useRef();

  return (
    <div className='post-container'>
      {isAuth ? (
        <>
          <div className=''>
            <input
              ref={titleRef}
              placeholder='Insert title here...'
              style={{
                outline: "none",
                border: "none",
                width: "100%",
              }}
            ></input>
          </div>
          <div className=''>
            <input
              ref={contentRef}
              placeholder='Insert content here...'
              style={{ outline: "none", border: "none", width: "100%" }}
            ></input>
          </div>
          <button
            onClick={() =>
              addPost(titleRef.current.value, contentRef.current.value)
            }
            style={{ marginTop: "5px" }}
          >
            Post
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default MiddleTopSection;
