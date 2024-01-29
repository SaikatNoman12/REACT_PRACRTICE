import { useState } from "react";
import "./FormValidation.css";

function FormValidation() {
  // get form data
  const [userName, getUserName] = useState("");
  const [password, getPassword] = useState("");

  // error data
  const [userNameErr, setUserNameError] = useState(false);
  const [passwordErr, setPasswordError] = useState(false);

  // handle form
  function onHandleForm(e) {
    if (userName == "" && password == "") {
      setUserNameError(true);
      setPasswordError(true);
    } else if (userName == "") {
      setUserNameError(true);
    } else if (password == "") {
      setPasswordError(true);
    } else {
      console.log("hello");
    }
    e.preventDefault();
  }

  return (
    <>
      <div>
        <h1>Form Validation</h1>

        <form onSubmit={onHandleForm}>
          <input
            type="text"
            placeholder="Enter user name"
            onChange={(e) => getUserName(e.target.value)}
          />
          {userNameErr ? <p>Enter your user name!</p> : null}

          <br />
          <br />
          <input
            type="text"
            placeholder="Enter password"
            onChange={(e) => getPassword(e.target.value)}
          />
          {passwordErr ? <p>Enter your user password!</p> : null}
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FormValidation;
