import CardsList from './cards-block.js';

export default class HomePage {
  constructor (products = []) {
    this.pageSize = 1;
    this.products = products;
    this.render();
  
  }
  getTemplate () {
    return `

        <div>
          <div data-element="cardsList">
            <!-- Card component -->
          </div>
          
    `;
  }
  /*initComponents () {
    const totalPages = Math.ceil(this.products.length / this.pageSize);

    const cardList = new CardsList(this.products.slice(0, this.pageSize));
    const pagination = new Pagination({
      activePageIndex: 0,
      totalPages
    });

    this.components.cardList = cardList;
    //this.components.pagination = pagination;
  }

  renderComponents () {
    const cardsContainer = this.element.querySelector('[data-element="cardsList"]');
    const paginationContainer = this.element.querySelector('[data-element="pagination"]');

    cardsContainer.append(this.components.cardList.element);
    paginationContainer.append(this.components.pagination.element);
  }*/

  render () {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;
  }

  /*initEventListeners () {
    this.components.pagination.element.addEventListener('page-changed', event => {
      const pageIndex = event.detail;

      const start = pageIndex * this.pageSize;
      const end = start + this.pageSize;
      const data = this.products.slice(start, end);

      this.components.cardList.update(data);
    });
  }*/
}
export default HomePage;