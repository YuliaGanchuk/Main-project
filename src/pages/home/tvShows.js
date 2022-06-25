import React from "react";
import MoviesCards from "./movie-cards-list";
import TvCards from "./skeleton";
import Items from "./items"

const BECKEND_URL = "https://api.tvmaze.com/";
export default class TvShows extends React.Component {
  constructor(props) {
    super(props);
    this.url = new URL("shows?page=1", BECKEND_URL);
    this.state = { movies: [], isLoaded: false, count: 0};

    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  handleStatusChange(data) {
    const movieNumber = data.slice(0, 96);
    this.setState({
      movies: movieNumber,
      isLoaded: true,
      count: movieNumber.length
    });
  }

  loadData() {
    fetch(this.url)
      .then((response) => response.json())
      .then(this.handleStatusChange)
      .catch(() => this.handleStatusChange([]));
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <>
          <Items count={this.state.count} />
          <div className="main-cards-block" data-element="cardsList">
            <MoviesCards movies={this.state.movies}></MoviesCards>
          </div>
        </>
      );
    } else {
      return <TvCards />;
    }
  }
}
