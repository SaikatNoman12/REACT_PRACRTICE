import { useState } from "react";
import "./InputForm.css";

function InputForm() {
  const [name, setName] = useState("");
  const [movie, setMovie] = useState("");
  const [TnC, setTnC] = useState(false);

  function handleForm(e) {
    e.preventDefault();
    console.log("Form Data", [name, movie, TnC]);
  }

  return (
    <>
      <h1>From</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <br />
        <br />
        <select onChange={(e) => setMovie(e.target.value)}>
          <option>Leo</option>
          <option>Rawan</option>
        </select>
        <br />
        <br />
        <input
          id="check"
          type="checkbox"
          onChange={(e) => setTnC(e.target.checked)}
        />
        <label htmlFor="check">Are you agree with me!</label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default InputForm;
