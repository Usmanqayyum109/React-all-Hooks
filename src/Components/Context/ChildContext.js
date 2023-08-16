import React, { useContext } from "react";
import { data } from "./UseContext";

function ChildContext() {
  const nyData = useContext(data);
  return (
    <div>
      ChildContext {nyData}
      <h1>{nyData}</h1>
    </div>
  );
}

export default ChildContext;
