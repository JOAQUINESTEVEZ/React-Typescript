import React from "react";

interface Props {
  carItems: string[];
  onClear: () => void;
}

export const Cart = ({ carItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {carItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};
