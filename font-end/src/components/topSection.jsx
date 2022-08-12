import React from "react";
import useUser from "../helper/userContext";

function TopSection() {
  const { isAuth, handleAuth } = useUser();

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
          <button onClick={() => handleAuth()}>
            {isAuth ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
}

export default TopSection;
