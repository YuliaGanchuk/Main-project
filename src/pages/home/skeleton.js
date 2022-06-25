import './home.css';

function ItemCards(skeleton) {
  return (                       
      <div className="skeleton">
          <div className="skeleton-image">
              <div className="skeleton-raiting" />
          </div>
          <p className="skeleton-text" />
      </div>
  )   
}

export const TvCards = () => {
  const createArray = (size) => [...new Array(size)]
  return (
      <div className="home">
          {
              createArray(8).map((el, index) => <ItemCards />)
          }
      </div>
  );
}

export  default TvCards