import React from 'react';
import MovieCard from "./sug-movie-card";
import './sug-style.css';

export default class MoviesCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies.slice(0, 8),
      allMovies: props.movies || [],
      lastIndex: 8,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const size = this.state.allMovies.length - 1;
      let newIndex = this.state.lastIndex + 8;
      newIndex = size - newIndex >= 0 ? newIndex: 8;
    this.setState({
      movies: this.state.allMovies.slice(newIndex === 8 ? 0: this.state.lastIndex, newIndex),
      lastIndex: newIndex,
    });
  }, 30000)
  }

  componentWillUnmount() {
    this.interval && clearInterval(this.interval)
  }

  render() {
    return (<div className='cardsListBlock'>
      <div className='cardsListContent' data-element="body">
        {this.state.movies.map(movie => <MovieCard id={movie.id} key={movie.id} skeleton={movie}/>)}
      </div>
    </div>)
  }
}
