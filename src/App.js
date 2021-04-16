import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://mai-shopping-cart-api-staging.herokuapp.com/api/users")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

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
