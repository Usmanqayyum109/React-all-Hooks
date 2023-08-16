import React, { useMemo, useState } from "react";

function UseMemo() {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    for (let i = 0; i < 10000000; i++) {}
    return num;
  };

  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);
  return (
    <div>
      <button onClick={getValue}>Counter</button>
      <p>My new Number : {checkData}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "YOU CLICKED ME" : "CLICKED ME PLZ"}
      </button>
    </div>
  );
}

export default UseMemo;
