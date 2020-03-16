import React, { Component } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import CharDescription from "./components/CharDescription/CharDescription";
import MovieCard from "./components/MovieCard/MovieCard";
import axios from "axios";

class App extends Component {
  state = {
    swPeople: [],
    selectedCharacter: false,
    selectedPerson: [],
    currentMovies: []
  };

  componentDidMount() {
    const swapiURL = `https://swapi.co/api/people/`;
    axios
      .get(swapiURL)
      .then(response => {
        this.setState({ swPeople: response.data.results });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  populateMovies = () => {
    const foo = this.state.selectedPerson[0].films;
    const currentMovies = [];

    this.state.selectedCharacter &&
      foo.map(film =>
        axios
          .get(film)
          .then(response => {
            currentMovies.push(response);
            this.setState({ currentMovies });
          })
          .catch(function(error) {
            console.log(error);
          })
      );
  };

  selectPerson = async e => {
    const selectedPerson = this.state.swPeople.filter(
      person => person.name === e.target.value
    );
    selectedPerson[0]
      ? this.setState(
          { selectedPerson, selectedCharacter: true },
          this.populateMovies
        )
      : this.setState({
          selectedPerson: [],
          currentMovies: [],
          selectedCharacter: false
        });
  };

  render() {
    return (
      <div className="App">
        <h1>Challenge 2</h1>
        <Dropdown
          swPeople={this.state.swPeople}
          selectPerson={this.selectPerson}
        />
        <div className="card-wrapper">
          <CharDescription
            pronouns={this.state.pronouns}
            selectedCharacter={this.state.selectedCharacter}
            selectPerson={this.state.selectedPerson}
          />
          <MovieCard
            selectedMovies={this.state.selectedMovies}
            currentMovies={this.state.currentMovies}
          />
        </div>
      </div>
    );
  }
}

export default App;
