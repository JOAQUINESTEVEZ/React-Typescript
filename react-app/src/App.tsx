import { useState } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const items = ["Miami", "New York", "Los Angeles", "San Francisco"];
  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
