import React from 'react';

const Item = ({Product}) => {
  return (
    <div>
      <h3>{Product.title}</h3>
      <p>{Product.price}</p>
      <button className='button'>Ver mas</button>
    </div>
  );
}

export default Item;
