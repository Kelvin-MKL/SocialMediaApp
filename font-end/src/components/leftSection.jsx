import React from "react";
import Title from "./title";
import Portrait from "./portrait";
import Info from "./info";

function LeftSection({ user }) {
  return (
    <div className='leftSection'>
      <Title />
      <Portrait />
      <Info user={user} />
    </div>
  );
}

export default LeftSection;
