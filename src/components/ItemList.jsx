import React from 'react';


const ItemList = ({Products}) => {
  return (
    <div>
      {Products.map((Product)=>
       <div>
        <p>{Product.name}</p>
      </div> )
      }
    </div>
  );
}

export default ItemList;