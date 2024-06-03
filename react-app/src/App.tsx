import { useState } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Button from "./components/ButtonGroup/ButtonGroup";
import Like from "./components/Like";

function App() {
  const items = ["Miami", "New York", "Los Angeles", "San Francisco"];
  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      <div>
        <Like initStatus={false} onClick={() => console.log("clicked")} />
      </div>
      <div>
        <Button
          children="Button"
          color="primary"
          onClick={() => console.log("Clicked")}
        ></Button>
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        ></ListGroup>
      </div>
    </div>
  );
}

export default App;
