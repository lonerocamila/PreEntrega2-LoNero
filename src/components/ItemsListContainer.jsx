import React from 'react'
import getList from '../utils/getProducts'

import { useState } from 'react';
import ItemList from './ItemList';

const [arrayList,setArrayList] = useState([]);
    
useEffect (()=>{
    getList()
    .then((response)=> setArrayList(response))
    .catch((err)=> console.error())
    .finally()
    
},[])
const prod = () => {
    return (
      <div>
        
      </div>
    );
  }
  
  
return(
    <div className='listContainer'>
        
     <ItemList Products={arrayList} />  
    </div>
)



export default ItemsListContainer