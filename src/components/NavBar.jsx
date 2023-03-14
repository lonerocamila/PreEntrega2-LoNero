
import React, { useState } from 'react'
import Button from './Button';
import './NavBar.css';
 import { Link, Route, Routes } from 'react-router-dom'


const Nav = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"PRODUCTS",link:"/Itemslistcontainer"},
      {name:"BROWSE",link:"/browse"},
      {name:"CART",link:"/cartWidgets"},
      {name:"LOGIN",link:"/login"},
    ];
    let [open,setOpen]=useState(false);
  return (
      <div className='shadow-md w-full fixed top-0 left-0  table-responsive-sm'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <div>
     <button data-text="Awesome" class="button">
       <span className="actual-text text-black ">&nbsp;Rave&nbsp;</span>
      <span className="hover-text" aria-hidden="true">&nbsp;Rave&nbsp;</span>
    </button>
      </div>
      
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
       <button className="btn">
         <span className="icon">
            <svg viewBox="0 0 175 80" width="40" height="40">
                <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
            </svg>
            </span>
           <span className="text align-center" >MENU</span>
       </button>
      </div>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
            </li>
          ))
        }
        <Button>
          Get Started
        </Button>
      

       
      </ul>
      </div>
    </div>
  )
}

export default Nav;
