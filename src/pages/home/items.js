import styles from './home.module.scss';

function Items (props) {
  return (
    <div className={styles.num}>       
       <h3><span>{props.count || 0}</span> items</h3>  
    </div> 
  );
}

export default Items;