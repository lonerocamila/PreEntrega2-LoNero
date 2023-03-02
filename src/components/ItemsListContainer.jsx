import React from 'react'
import getList from './GetData';
import data from './GetData';

useEffect (()=>{
    getList()
    .then((response)=> setArrayList(response))
    .catch((err)=> console.error())
    .finally()
    
},[])

return(
    <div className='listContainer'>

    </div>
)



export default ItemsListContainer