import React from 'react'
import "./NavBar.css";
import CartWidgets from './CartWidgets';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

    <nav>
    <div className='navbar'>
      <ul>
      <li>Inicio</li>
      <Link className='nav_link'>Productos</Link>
      <li>Grupos</li>
      <li>
        <form className='busqueda'>
        <input type='text' placeholder='Buscar' style={{width:200, padding:5, margin:10}}/>
        <button className='buscar' type='submit' style={{width:100, padding:5, margin:10}}>Buscar</button>
       
      </form>
      </li>
     <div className='cart'>
     <li className='carrito'>
    <CartWidgets />
    </li>
    </div>
       </ul>
     <div>
      </div>
      </div>
      </nav>

  
  )
}

export default NavBar