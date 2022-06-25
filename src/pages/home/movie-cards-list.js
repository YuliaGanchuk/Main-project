import React from 'react';
import MovieCard from "./movie-card.js";
export default class MoviesCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: props.movies || []};
  }

  componentDidMount() {
  }

  render() {
    return (<div className="cards-list-block">
      <div className="cards-list-content" data-element="body">
        {this.state.movies.map(movie => <MovieCard key={movie.id} skeleton={movie}/>)}
      </div>
    </div>)
  }
}
