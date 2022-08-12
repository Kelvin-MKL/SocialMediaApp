import React from "react";

function TopSection({ isAuth, onAuth }) {
  return (
    <>
      <div className='topSection'>
        <input
          id='search'
          style={{ marginRight: "5px", borderRadius: "10px" }}
          placeholder='Search...'
        ></input>
        <button
          id='btn-search'
          style={{
            borderRadius: "10px",
            background: "red",
            color: "white",
          }}
        >
          Search
        </button>
        <div id='login'>
          <button onClick={() => onAuth()}>
            {isAuth ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
}

export default TopSection;
