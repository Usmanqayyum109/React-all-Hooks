import React, {
  // useEffect,
  useRef,
  useState,
} from "react";

function UseRef() {
  //   const [count, setCount] = useState(0);
  const [data, setData] = useState("");

  const inputEle = useRef("");
  //   console.log(inputEle);

  const changeElement = () => {
    // console.log(inputEle.current.style);
    inputEle.current.style.backgroundColor = "#707070";
    inputEle.current.focus();
  };

  //   const count = useRef(100);
  //   console.log(count);

  //   useEffect(() => {
  //     //   setCount(count + 1);
  //     count.current = count.current + 1;
  //   });
  return (
    <div>
      <input
        ref={inputEle}
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={changeElement}>PRESS</button>
      {/* <h1>The numbers of times renders: {count.current}</h1> */}
    </div>
  );
}

export default UseRef;
