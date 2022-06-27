import styles from './home.module.scss';

function ItemCards(skeleton) {
  return (                       
      <div className={styles.skeleton}>
          <div className={styles.skeletonImages}>
              <div className={styles.skeletonRaiting} />
          </div>
          <p className={styles.skeletonText} />
      </div>
  )   
}

export const TvCards = () => {
  const createArray = (size) => [...new Array(size)]
  return (
      <div className={styles.home}>
          {
              createArray(8).map((el, index) => <ItemCards key={index} />)
          }
      </div>
  );
}

export  default TvCards