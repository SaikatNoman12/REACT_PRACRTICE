import { useState } from "react";

function Show() {
  let [status, setStatus] = useState(false);
  let [statusColor, setColorStatus] = useState(false);

  return (
    <div>
      {status ? (
        <h1
          className={statusColor ? "set-first-class" : null}
          style={statusColor ? { color: "green" } : { color: "red" }}
        >
          Hello Nadia
        </h1>
      ) : (
        ""
      )}
      <button type="button" onClick={() => setStatus(false)}>
        Hide
      </button>
      <button type="button" onClick={() => setStatus(true)}>
        Show
      </button>
      <button type="button" onClick={() => setStatus(!status)}>
        Toggle
      </button>

      <button type="button" onClick={() => setColorStatus(!statusColor)}>
        Class Toggle
      </button>
    </div>
  );
}

export default Show;
