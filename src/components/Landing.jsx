import React from 'react'
import './Landing.css';

import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
   
      <main>
           <Link to={"/"}>
        <h2 className='Bienvenido'>¡Bienvenido a Rave!</h2>
      </Link>
        <img  className="imagen" src="https://4kwallpapers.com/images/walls/thumbs_3t/929.jpg" alt="imagen principal"  />

    </main>

    </div>
    
  )
}

export default Landing;