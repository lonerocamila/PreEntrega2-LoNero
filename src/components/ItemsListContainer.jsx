import React from 'react'
import Loader from './Loader'
import { useState } from 'react';
import getList from '../utils/getProducts';
import ItemList from './ItemList';
import { useEffect } from 'react';



const ItemsListContainer = () => {
    const [arrayList,setArrayList] = useState([]);
    const [loading, setLoading] = useState (false);
    // const [isLoading, setIsLoading] = useState(true);
  <div className= "container" >
    <div className="detail">
    <img src="{getList.image}" alt="" className='detail_image' />
       <div className="content">
          <h1>{getList.title}</h1>
         </div>
    </div>
  </div>
useEffect(() => {
    // setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/`)
      .then((response) => response.json())
      .then((getList) => {
        setArrayList(getList);
        // setIsLoading(false);
      });
  }, []);


useEffect (()=>{
    setLoading(true);
    // getList()
    // .then((response)=> setArrayList(response))
    // .catch((err)=> console.error())
    // .finally(()=> (setLoading(false)));   
    fetch('https://fakestoreapi.com/products/1')
    .then((res) => res.json())
    .then ((data)=> setArrayList(data))
    // .catch((err) => (setLoading(false)))
    // .finally (()=> setLoading(false))
},[])
  

return(
    <div className='listContainer'>
      {/* Abro llaves para hablar en lenguaje js puro    
    {
        loading ? <Loader /> :   <ItemList Products={arrayList} /> 
    } */}
    
    </div>
)
}



export default ItemsListContainer