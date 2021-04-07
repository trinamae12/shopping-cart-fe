import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://mai-shopping-cart-api.herokuapp.com/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(console.log);
  });

  return (
    <div className="App">
      {users.map(user => {
        return (
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
