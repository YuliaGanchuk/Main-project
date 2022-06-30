import React from "react";
import MovieCard from "./movie-card";
import "./style.css";
export default class MoviesCards extends React.Component {
  render() {
    console.log(this.props.movies);
    return (
      <div className="cardsListBlock">
        <div className="cardsListContent" data-element="body">
          {this.props.movies.map((movie) => (
            <MovieCard id={movie.id} key={movie.id} skeleton={movie} />
          ))}
        </div>
      </div>
    );
  }
}
