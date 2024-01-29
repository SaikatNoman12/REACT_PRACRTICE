import { useState } from "react";
import "./ConditionalRendering.css";

function ConditionalRendering() {
  const [isLogged, getLogged] = useState(4);

  return (
    <>
      <div>
        <h1>Conditional Rendering</h1>
        <br />
        <h2>
          {isLogged === 1
            ? "User 1"
            : isLogged === 2
            ? "User 2"
            : isLogged === 3
            ? "User 3"
            : "Guest user"}
        </h2>
      </div>
    </>
  );
}

export default ConditionalRendering;
