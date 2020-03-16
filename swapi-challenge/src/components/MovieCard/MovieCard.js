import React from "react";

function MovieCard(props) {
  console.log(props);
  return (
    <div className="moviecard-wrapper">
      <h2>Movies</h2>
      {props.currentMovies[0] ? (
        <ul>
          {props.currentMovies.map(movie => (
            <li>{movie.data.title}</li>
          ))}
        </ul>
      ) : (
        <h3 className="movie-header">
          Looks like there are no movies for this this character..
        </h3>
      )}
    </div>
  );
}

export default MovieCard;
