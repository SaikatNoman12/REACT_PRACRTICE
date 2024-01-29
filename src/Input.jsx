import { useState } from "react";

function Input() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getInput(val) {
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div>
      <h2>{data}</h2>

      <input type="text" onChange={getInput} />

      {print ? <h1>{data}</h1> : null}

      <button type="button" onClick={() => setPrint(true)}>
        Submit
      </button>
    </div>
  );
}

export default Input;
