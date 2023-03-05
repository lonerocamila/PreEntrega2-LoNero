import React from 'react';
import './ItemDetail.css'
import Products from '../utils/getProducts';

const ItemDetail = ({item}) => {
  return (
    <div className='item-detail'>
      <h1>Detalle del Producto</h1>
    <h2>{Products.title}</h2>
    <p>{Products.description}</p>
    <img src="{Products.image}" alt="{Products.title}"/>
    <p>{Products.price}</p>
    <button className='add-to-cart'>Agregar al carrito</button>
</div>
  )
}

export default ItemDetail;