import React from "react";
import Title from "./title";
import Portrait from "./portrait";
import Info from "./info";

function LeftSection() {
  return (
    <div className='leftSection'>
      <Title />
      <Portrait />
      <Info />
    </div>
  );
}

export default LeftSection;
