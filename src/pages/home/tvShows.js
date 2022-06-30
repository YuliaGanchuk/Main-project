import React from "react";
import MoviesCards from "./movie-cards-list";
import TvCards from "./skeleton";
import Items from "./items";
import styles from "./home.module.scss";
import { NoResultComponent } from "./../../components/NoResultComponent/NoResultComponent";

const BECKEND_URL = "https://api.tvmaze.com/";
export default class TvShows extends React.Component {
  constructor(props) {
    super(props);
    this.url = new URL("shows?page=1", BECKEND_URL);
    this.state = { movies: [], isLoaded: false, count: 0 };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  handleStatusChange(data) {
    this.setState({
      movies: data,
      isLoaded: true,
      count: data.length,
    });
  }

  loadData() {
    fetch(this.url)
      .then((response) => response.json())
      .then(this.handleStatusChange)
      .catch(() => this.handleStatusChange([]));
  }

  render() {
    const texted = this.props.text;
    const filterData = this.state.movies.filter((show) =>
      texted !== ""
        ? show.name.toLowerCase().includes(texted.toLowerCase())
        : show
    );
    const numpage = Math.ceil(filterData.length / 8);
    this.props.setPageNum(numpage);
    const slicePageData = filterData.slice(
      (this.props.numberSelectedPage - 1) * 8,
      this.props.numberSelectedPage * 8
    );
    filterData.length < 9 && this.props.setPageNum(0);
    if (this.state.isLoaded) {
      return (
        <>
          {filterData.length !== 0 && <Items count={filterData.length} />}
          {filterData.length > 0 ? (
            <div className={styles.mainCardsBlock} data-element="cardsList">
              <MoviesCards movies={slicePageData}></MoviesCards>
            </div>
          ) : (
            <NoResultComponent text={texted} setText={this.props.setText} />
          )}
        </>
      );
    } else {
      return <TvCards />;
    }
  }
}
