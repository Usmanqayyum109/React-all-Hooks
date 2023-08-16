import React, { useEffect, useLayoutEffect } from "react";

function UseLayoutEffect() {
  useEffect(() => {
    console.log("use layout effect 1");
  });

  useEffect(() => {
    console.log("use layout effect 2");
  });

  useLayoutEffect(() => {
    console.log("use layout effect 3");
  });
  return <div>UseLayoutEffect</div>;
}

export default UseLayoutEffect;
