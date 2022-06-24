import MoviesCard from './movie-cards-list';


const BECKEND_URL = 'https://api.tvmaze.com/'
export default class TvShows {
  constructor () {
    const movies = 'shows?page=1';
    this.pageSize = 8;
    this.movies = [];
    this.url = new URL('shows?page=1', BECKEND_URL);
    
    this.components = {};

    this.render();
    this.renderComponents();
  }

async loadData() {

  const response = await fetch(this.url);
  const movies = await response.json();

  return movies;
}


  getTemplate () {
    return `
        <div class=main-cards-block data-element="cardsList">

        </div>
    `;
  }
 
  }
  renderComponents ()  {
    const cardsContainer = this.element.querySelector('[data-element="cardsList"]');

    cardsContainer.append(this.components.cardList.element);
  }

  render () {
    const wrapper = document.createElement('div');
    wrapper.dangerouslySetInnerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;
  }






