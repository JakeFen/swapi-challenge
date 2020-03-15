import React, { Component } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import CharDescription from "./components/CharDescription/CharDescription";
import MovieCard from "./components/MovieCard/MovieCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Dropdown/>
        <CharDescription/>
        <MovieCard/>
      </div>
    );
  }
}

export default App;
