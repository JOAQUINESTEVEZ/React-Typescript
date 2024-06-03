import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClosed={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button
        color="danger"
        onClick={() => console.log(setAlertVisibility(true))}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
