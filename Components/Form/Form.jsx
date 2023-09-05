import { useState } from "react";

export default function Form({ setUserName }) {
  const [inputValue, setInputValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setUserName(inputValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Search user Github</h3>
      <div className="search">
        <label>User name</label>
        <input
          type="text"
          className="form-control"
          value={inputValue}
          placeholder="User Name"
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button>Search</button>
      </div>
    </form>
  );
}
