import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState("");
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>{data}</p>
      <div className="child">
        <h1>Child Component</h1>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
