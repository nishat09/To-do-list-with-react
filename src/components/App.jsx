import React, { useState } from "react";
import TodoItems from "./todoItems";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleInputChange(event) {
    const newInput = event.target.value;
    setInputText(newInput);
  }

  function addItems() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item, index) => index !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInputChange} value={inputText} type="text" />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <TodoItems index={index} item={item} deleteItem={index}/>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
