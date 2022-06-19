import Sceleton from "./sceleton.js";

export default class SceletonList {
  constructor (data = []) {
    this.data = data;
    this.render();
    this.renderCards();
  }

  getTemplate () {
    return `
      <div>
      
      </div>
    `;

  }

  render () {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;

  }

  renderSceleton () {
    const sceletons = this.data.map(item => {
      const sceleton = new Sceleton(item);
      return sceleton.element;
    });

    const body = this.element.querySelector('[data-element="body"]');

    body.innerHTML = '';
    body.append(...sceletons);
  }

  update (data = []) {
    this.data = data;

    this.renderSceleton();
  }
}
