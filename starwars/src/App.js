import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Body from "./Body.js";

const img =
  "http://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then(res => {
      setPeople(res.data.results);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(res => {
      setPeople(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <img
          className="background"
          src={img}
          alt="Star Wars background"
          width="300px"
          height="170px"
          marginTop="-800px"
        />
      </div>

      <Body people={people} />
    </div>
  );
}

export default App;
