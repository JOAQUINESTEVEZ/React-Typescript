import { is } from "immer/dist/internal";
import React, { useState } from "react";

interface Props {
  children: string;
  maxChar: number;
}

export const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;

  const text = isExpanded
    ? children.substring(0, maxChar)
    : children.substring(0, 10);

  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};
