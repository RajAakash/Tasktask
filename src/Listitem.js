import React from "react";
import "./App.css";
const Listitem = ({ item, key, id, onSelect }) => {
  return (
    <div className="item">
      <li key={key}>{item}</li>
      <button onClick={() => onSelect(id)}>Delete</button>
    </div>
  );
};

export default Listitem;
