import React from 'react';
import Item from './Item';

const ItemList = ({Products}) => {
  return (
    <div key={Products.id}>
      {Products.map((Product)=>
       <div>
        <Item key={Product.id} Product={Product}/>
      </div> )
      }
    </div>
  );
}

export default ItemList;
