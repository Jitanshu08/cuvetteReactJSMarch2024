import React, { useState } from "react";

function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input Value: ${inputValue}`);
  };

  return (
    <>
      <h1>{inputValue}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ControlledComponent;
