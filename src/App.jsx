import { useState } from "react";
import "./App.css";
import FormValidation from "./Components/FormValidation/FormValidation";

function App() {
  const [count, setCount] = useState(0);

  function NestedApp() {
    return <div>This is nested app component.</div>;
  }
  return (
    <div className="App">
      {/* <Show></Show> */}
      {/* --- END! Show --- */}

      {/* <Input></Input> */}
      {/* --- END! Input --- */}

      {/* <Students totalStudent="100" firstStudent="Rahim Khan"></Students> */}
      {/* --- END! Students --- */}

      {/* <Student name={"Abdullah"} email={"abc@gmailc.com"}></Student> */}
      {/* --- END! Students --- */}

      {/* <ClassState></ClassState> */}
      {/* --- END! Class State --- */}

      {/* <StateReact></StateReact> */}
      {/* --- END! State --- */}

      {/* <h1>Hello World</h1>
      <h1>Hello World</h1> */}
      {/* --- END! Parent Text --- */}

      {/* <User /> */}
      {/* <User></User> */}
      {/* --- END! Users --- */}

      {/* <Users></Users> */}
      {/* <Users /> */}
      {/* --- END! Users --- */}

      {/* {NestedApp()} */}
      {/* <NestedApp /> */}
      {/* --- END! NestedApp --- */}

      {/* <JavaScriptXML /> */}
      {/* --- END! JavaScriptXML --- */}

      {/* <ClickEvent></ClickEvent> */}
      {/* --- END! ClickEvent --- */}

      {/* <InputForm></InputForm> */}
      {/* --- END! InputForm --- */}

      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* --- END! ConditionalRendering --- */}

      <FormValidation></FormValidation>
      {/* --- END! FormValidation --- */}
    </div>
  );
}

export default App;
