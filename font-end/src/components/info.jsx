import React from "react";

function Info({ user }) {
  return (
    <div style={{ fontWeight: "bold" }} className='left-info'>
      Info
      <br></br>
      <div style={{ fontSize: "x-small" }}>
        {user.name}
        <br />
        {user.email}
      </div>
    </div>
  );
}

export default Info;
