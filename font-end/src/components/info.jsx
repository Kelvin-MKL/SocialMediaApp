import React from "react";
import useUser from "../helper/userContext";

function Info() {
  const { user, isAuth } = useUser();
  return (
    <div style={{ fontWeight: "bold" }} className='left-info'>
      Info
      <br></br>
      <div style={{ fontSize: "x-small", wordBreak: "break-word" }}>
        {isAuth && user.name}
        <br />
        {isAuth && user.email}
      </div>
    </div>
  );
}

export default Info;
