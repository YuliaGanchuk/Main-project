import React from 'react';
import MovieCard from "./sug-movie-card";
import './sug-style.css';

export default class MoviesCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: props.movies || []};
  }

  componentDidMount() {
  }

  render() {
    return (<div className='cardsListBlock'>
      <div className='cardsListContent' data-element="body">
        {this.state.movies.map(movie => <MovieCard id={movie.id} key={movie.id} skeleton={movie}/>)}
      </div>
    </div>)
  }
}

