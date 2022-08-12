import React from "react";

function TopSection({ isAuth, onAuth }) {
  return (
    <>
      <div className='topSection'>
        <input
          style={{ marginRight: "5px", borderRadius: "10px" }}
          placeholder='Search...'
        ></input>
        <button
          style={{ borderRadius: "10px", background: "red", color: "white" }}
        >
          Search
        </button>
        <div style={{ position: "absolute", right: "10px" }}>
          <button onClick={() => onAuth()}>
            {isAuth ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
}

export default TopSection;
