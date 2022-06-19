export default class Sceleton {
  constructor (someSceleton = {}) {
    this.state = someSceleton;
    this.myRender();
  }

  getTemplate () {
    const result =  `
      <div className='sceleton'data-element="body">           
        <div className='sceleton-image'>
            <div className='sceleton-raiting' />
        </div>                 
        <p className="sceleton-text" />
      </div>
    `;

    return result
  }

  update(data = {}) {
    this.state = data;
    this.componentElement.innerHTML = this.getTemplate();
  }

  myRender () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }
}
