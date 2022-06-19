import './home.css';
import Slide from './Shows.png';

export const Home = () => {
    return (   
            <div className="wrapper">
                <div className='text'>
                    <h3> <span>96</span> items</h3>
                </div>
                <div className='home'>               
                    <div className='sceleton'>           
                        <div className='sceleton-image'>
                            <div className='sceleton-raiting' />
                        </div>                 
                        <p className="sceleton-text" />
                    </div>
                    <div className='sceleton'>           
                        <div className='sceleton-image'>
                            <div className='sceleton-raiting' />
                        </div>                 
                        <p className="sceleton-text" />
                    </div>
                    <div className='sceleton'>           
                        <div className='sceleton-image'>
                            <div className='sceleton-raiting' />
                        </div>                 
                        <p className="sceleton-text" />
                    </div>
                    <div className='sceleton'>           
                        <div className='sceleton-image'>
                            <div className='sceleton-raiting' />
                        </div>                 
                        <p className="sceleton-text" />
                    </div>
                    <div className='sceleton'>           
                        <div className='sceleton-image'>
                            <div className='sceleton-raiting' />
                        </div>                 
                        <p className="sceleton-text" />
                    </div>
                    <div className='sceleton'>           
                        <div className='sceleton-image'>
                            <div className='sceleton-raiting' />
                        </div>                 
                        <p className="sceleton-text" />
                    </div>
                    <div className='sceleton'>           
                        <div className='sceleton-image'>
                            <div className='sceleton-raiting' />
                        </div>                 
                        <p className="sceleton-text" />
                    </div>
                    <div className='sceleton'>           
                        <div className='sceleton-image'>
                            <div className='sceleton-raiting' />
                        </div>                 
                        <p className="sceleton-text" />
                    </div>
                </div>
                    <div className='shows'>           
                        <a href="/"><img className='image' src= { Slide } alt="slide" /></a>
                        <div className='raiting'>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className='star'  viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                            </svg>
                            <span className='span'>6.8</span>   
                        </div>     
                        <p className="text-name">Black Widow</p>
                    </div>    
                
            </div>
    )
};

/*const sceleton = document.querySelector('sceleton.hidden'),
      shows = document.querySelector('shows');

setTimeout(() => {
    shows.classNameList.add('hidden');
    sceleton.classNameList.remove('hidden');
}, 3000);*/ 

/*import './home.css';

function ItemCards  (card)  {
    return (      
        <div className="sceleton">
          <div className="sceleton-image">
            <div className="sceleton-raiting" />
          </div>
          <p className="sceleton-text" />
        </div>
    )
  }
  
  
  function Home () {
    const createArray = (size) => [...new Array (size)]
    return (
      <div className="home">
          {
            createArray(8).map((el, index) => <ItemCards />)
          }
      </div> 
    );
  }

export default Home;*/