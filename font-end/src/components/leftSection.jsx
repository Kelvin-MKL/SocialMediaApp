import React from "react";
import Title from "./title";
import Portrait from "./portrait";
import Info from "./info";

function LeftSection({ user, isAuth }) {
  return (
    <div className='leftSection'>
      <Title />
      <Portrait />
      <Info user={user} isAuth={isAuth} />
    </div>
  );
}

export default LeftSection;
