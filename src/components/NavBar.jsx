import React from 'react'
import "./NavBar.css";
import Cart from './Cart';
import CartWidgets from './CartWidgets';
import { useState } from 'react';
import { Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Checkout from './Checkout';
import ItemsListContainer from './ItemsListContainer';


const NavBar = (props) => {
  console.log(props);
  const [value, setValue] = useState('');

    // funcion para controlar el envio de la barra de busqueda
    const handleSubmit = (e) => {
        e.preventDefault();
        //setear el value en el estado del search
        props.setSearch(value);
        console.log('Buscando...');
      
    }

    // funcion para controlar el cambio de estado en la barra de busqueda

    const handleChange = (e) => { 
     // setear nuestro estado con el valor del input
     setValue(e.target.value);
    }


    return (

    <nav >
    <div className='navbar'>
      <ul>


      <Link className='link' to='/'>Inicio</Link>
      <Link className='link' to='/ItemsListContainer'>Productos</Link>
      <Link className='link' to='/getProducts'>Categorias</Link>
      <li>
        <form className='busqueda'>
        <input type='text' placeholder='Buscar' style={{width:200, padding:5, margin:10}}/>
        <button className='buscar' type='submit' style={{width:100, padding:5, margin:10}}>Buscar</button>
      </form>
    </li>
     <div className='cart'>
     <Link to='/Cart' className='carrito'>
    <CartWidgets />
    </Link>
    </div>
       </ul>
     <div>
      </div>
      </div>
      </nav>

  
  )
}

export default NavBar