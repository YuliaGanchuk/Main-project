import MovieCard from "./movie-card.js";

export default class MoviesCards {
  constructor (data = []) {
    this.data = data;
    this.render();
    this.renderCards();
  }

  getTemplate () {
    return `
      <div class=cards-list-block>
        <div class="cards-list-content" data-element="body">

        </div>
      </div>

    `;

  }

  render () {
    const wrapper = document.createElement('div');
    wrapper.dangerouslySetInnerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;

  }

  renderCards () {
    const cards = this.data.map(item => {
      const card = new Movies(item);
      return card.element;
    });

    const body = this.element.querySelector('[data-element="body"]');

    body.dangerouslySetInnerHTML = '';
    body.append(...cards);
  }
  update (data = []) {
    this.data = data;

    this.renderCards();
  }
}
