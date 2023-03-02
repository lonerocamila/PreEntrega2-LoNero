import React from 'react'
import getList from '../utils/getProducts'

import { useState } from 'react';
import ItemList from './ItemList';
import Loader from './Loader';

const [arrayList,setArrayList] = useState([]);
const [loading, setLoading] = useState (false);

useEffect (()=>{
    setLoading(true);
    getList()
    .then((response)=> setArrayList(response))
    .catch((err)=> console.error())
    .finally(()=> (setLoading(false)));   
},[])
  
return(
    <div className='listContainer'>
     {/* Abro llaves para hablar en lenguaje js puro    */}
    {
        loading ? <Loader /> :   <ItemList Products={arrayList} /> 
    }   
    
    </div>
)



export default ItemsListContainer