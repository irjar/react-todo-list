import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  // save the new todo item value in the newValue constant
  // pass the value of the new todo item to the parent component once the Add button is clicked
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
