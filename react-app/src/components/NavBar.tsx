import React from "react";

interface Props {
  carItemsCount: number;
}

export const NavBar = ({ carItemsCount }: Props) => {
  return <div>NavBar: {carItemsCount}</div>;
};
