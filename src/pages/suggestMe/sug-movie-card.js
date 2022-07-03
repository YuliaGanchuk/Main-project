import React from 'react';
import './sug-style.css';
import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {skeleton: props.skeleton};
    }
  
    render () {
      return (
        <Link to={`/show-details/${this.props.id}`} state={{id: this.props.id}}>
            <div className='mainCardBlock'>
        <div className='sug-show'>

          <img className='photo' src={this.state.skeleton.image.medium} alt="slide" />
          <div className='raiting'>
              <svg className='sug-svg' xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className='star' viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg>
              <span className='span'>{this.state.skeleton.rating.average}</span>   
          </div>     
          <p className='sug-p'>{this.state.skeleton.name}</p>
          <div className='like'>
            <svg className='sug-p' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.48001 17.35L9.58001 19.75C9.98001 20.15 10.88 20.35 11.48 20.35H15.28C16.48 20.35 17.78 19.45 18.08 18.25L20.48 10.95C20.98 9.55 20.08 8.35 18.58 8.35H14.58C13.98 8.35 13.48 7.85 13.58 7.15L14.08 3.95C14.28 3.05 13.68 2.05 12.78 1.75C11.98 1.45 10.98 1.85 10.58 2.45L6.48001 8.55" stroke="#7B6EF6" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M1.38 17.35V7.54999C1.38 6.14999 1.98 5.64999 3.38 5.64999H4.38C5.78 5.64999 6.38 6.14999 6.38 7.54999V17.35C6.38 18.75 5.78 19.25 4.38 19.25H3.38C1.98 19.25 1.38 18.75 1.38 17.35Z" stroke="#7B6EF6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>Suggest this</div>
        </div>
        </div></Link>);
    }
}  
   

export default MovieCard