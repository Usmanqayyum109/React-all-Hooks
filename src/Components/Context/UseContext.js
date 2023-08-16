import React, { createContext } from "react";
import ChildContext from "./ChildContext";
const className = "5th";
export const data = createContext();
function UseContext() {
  return (
    <data.Provider value={className}>
      <ChildContext />
    </data.Provider>
  );
}

export default UseContext;
