
function Items (props) {
  return (
    <div className='items'>       
       <h3><span>{props.count || 0}</span> items</h3>  
    </div>
  );
}

export default Items;