import { useState } from "react";

function StateReact() {
  const [data, updateData] = useState("Nomaan");

  function setData() {
    updateData("Abdullah Al Nomaan");
  }

  return (
    <div>
      <h2>{data}</h2>
      <button type="button" onClick={setData}>
        Click And Update
      </button>
    </div>
  );
}

export default StateReact;
