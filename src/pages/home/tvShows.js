import React from 'react';
import MoviesCard from './movie-cards-list.js';
import TvCards from './draft-card.js';

const BECKEND_URL = 'https://api.tvmaze.com/'
export default class TvShows extends React.Component {
  constructor (props) {
    super(props);
    this.url = new URL('shows?page=1', BECKEND_URL);
    this.state = {movies: [], isLoaded: false}

    this.hendleStatusChange = this.handleStatusChange.bind(this);
  }  
      
  componentsDidMount() {
    this.loadData();
  }
    
  hendleStatusChange(data) {
    this.setState({
      'movies': data,
      isLoaded: true
    });
  } 

loadData(page = 1) {
  fetch(this.url)
    .then(response => response.json())
    .then(this.hendleStatusChange)
    .catch(() => this.hendleStatusChange([]));
}

render () {
  if (this.state.isLoaded) {
    return (<div className="main-cards-block" data-element="cardsList">
              <MoviesCards movies={this.state.movies} />
            </div>);
  } else {
    return (<TvCards />)
  }
};
}






