import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Los Angeles", "Buenos Aires"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;