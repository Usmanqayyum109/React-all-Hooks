import React from "react";
import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const myPLus = () => {
    setCount(count + 1);
  };

  const myMinus = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div style={{ flexDirection: "row" }}>
      <button onClick={myPLus}>Plus</button>
      <h1>{count}</h1>
      <button onClick={myMinus}>Minus</button>
      <br />
    </div>
  );
}

export default UseState;
