import React from 'react';
import MoviesCards from "./movie-cards-list";
import TvCards from "./skeleton";

const BECKEND_URL = 'https://api.tvmaze.com/';
export default class TvShows extends React.Component {
  constructor(props) {
    super(props);
    this.url = new URL('shows?page=1', BECKEND_URL);
    this.state = {movies: [], isLoaded: false}

    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  handleStatusChange(data) {
    this.setState({
      'movies': data.slice(0, 96),
      isLoaded: true
    });
  }

  loadData() {
    fetch(this.url)
      .then(response => response.json())
      .then(this.handleStatusChange)
      .catch(() => this.handleStatusChange([]));
  }

  render() {
    if (this.state.isLoaded) {
      return (<div className="main-cards-block" data-element="cardsList">
        <MoviesCards movies={this.state.movies}></MoviesCards>
      </div>);
      } else {
      return (<TvCards />)
    }
  }
};







