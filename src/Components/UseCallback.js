import React, { useCallback, useState } from "react";

const functionCounter = new Set();

function UseCallback() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
    // console.log("incremet");
  }, [count]);

  const dicrement = useCallback(() => {
    setCount(count - 1);
    // console.log("incremet");
  }, [count]);

  const incrementOther = useCallback(() => {
    setOtherCount(otherCount + 1);
    // console.log("incremet");
  }, [otherCount]);

  functionCounter.add(increment);
  functionCounter.add(dicrement);
  functionCounter.add(incrementOther);

  //   console.log(functionCounter);
  console.log(functionCounter.size);
  return (
    <div>
      <br />
      count : {count}
      <br />
      otherCount : {otherCount}
      <button onClick={increment}>+</button>
      <button onClick={dicrement}>-</button>
      <button onClick={incrementOther}>increment with other states</button>
    </div>
  );
}

export default UseCallback;
