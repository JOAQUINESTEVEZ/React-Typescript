import { useState } from "react";
import produce from "immer";
import { NavBar } from "./components/NavBar";
import { Cart } from "./components/Cart";
import { ExpandableText } from "./components/ExpandableText";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const gameHandleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const pizzaHandleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  const [shop, setShop] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const shopHandleClick = (id: number) => {
    setShop({
      ...shop,
      items: shop.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <>
      <NavBar carItemsCount={cartItems.length} />
      <Cart carItems={cartItems} onClear={() => setCartItems([])} />
      <p onClick={gameHandleClick}>
        {game.id} {game.player.name}
      </p>
      <p onClick={pizzaHandleClick}>
        {pizza.name} {pizza.toppings.join(", ")}
      </p>
      <ul>
        {shop.items.map((item) => (
          <li key={item.id} onClick={() => shopHandleClick(item.id)}>
            {item.id} {item.title} {item.quantity}
          </li>
        ))}
      </ul>

      <ExpandableText maxChar={100}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        doloremque ad ex atque incidunt, quo harum, quas vero iure suscipit,
        nemo animi rerum ducimus illo assumenda alias vitae cupiditate? Aliquam
        iste inventore quia, debitis quod ut sequi ab similique suscipit,
        possimus reiciendis molestias esse harum doloremque architecto ratione
        error quisquam, velit asperiores quas laborum necessitatibus vel.
        Voluptate minus, ex quia eius odit sapiente, repellat, quae assumenda
        molestiae alias modi tempora magnam? Sed laborum fugiat quos rem optio
        sapiente aspernatur ab facere, maiores numquam ex reprehenderit expedita
        doloribus assumenda quibusdam eos? Assumenda omnis, dolorum dolores
        possimus cupiditate dicta nulla nesciunt id!
      </ExpandableText>
    </>
  );
}

export default App;
