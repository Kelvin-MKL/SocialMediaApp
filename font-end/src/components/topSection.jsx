import React from "react";

function TopSection() {
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
      </div>
    </>
  );
}

export default TopSection;
