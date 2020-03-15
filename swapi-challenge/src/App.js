import React, { Component } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import CharDescription from "./components/CharDescription/CharDescription";
import MovieCard from "./components/MovieCard/MovieCard";
import axios from "axios";

class App extends Component {
  state = {
    swPeople: [],
    selectedPerson: "Jacob Fenwick"
  };

  componentDidMount() {
    const swapiURL = "https://swapi.co/api/people/";
    axios
      .get(swapiURL)
      .then(response => {
        console.log(response.data);
        this.setState({ swPeople: response.data.results });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  selectPerson = e => {
    this.setState({selectedPerson: e.target.value})
  }
  
  render() {
    return (
      <div className="App">
        <h1>{this.state.selectedPerson}</h1>
        <Dropdown
        swPeople={this.state.swPeople}
        selectPerson={this.selectPerson}
        />
        <CharDescription
        />
        <MovieCard />
      </div>
    );
  }
}

export default App;
