import React, { useState } from "react";

function TodoItems(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => !prevValue);
  }

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        onClick={handleClick}
        style={{
          flex: 1,
          cursor: "pointer",
          textDecoration: isDone ? "line-through" : "none",
        }}
      >
        {props.item}
      </span>

      <button
        onClick={(event) => {
          event.stopPropagation(); 
          props.deleteItem(props.index);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItems;
