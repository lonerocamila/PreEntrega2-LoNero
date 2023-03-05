import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemsListContainer from "./components/ItemsListContainer";
// import Loader from "./components/Loader";
import Checkout from './components/Checkout';
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidgets from './components/CartWidgets';
import './components/App.css'



function App() {
  const [search, setSearch] = useState(""); // search term
  const [results, setResults] = useState([])


  useEffect (()=> { 
    if (search !== ""){
   fetch(`https://fakestoreapi.com/products`)
   .then((res) => res.json())
   .then ((data) => setResults(data))
    }
  }, [search])

  console.log(results)

  return (
    <div>
   
       <BrowserRouter>
        <NavBar setSearch={setSearch} />
      <Routes>
          <Route
            path='/' 
             element={
              <ItemsListContainer greeting="Listado de todos los productos"/>
             }  
             />
          <Route 
            path='/category/:id' 
            element={
            <ItemsListContainer/>
            }  
          />
            <Route 
              path="/item/:id" 
                element={<ItemDetailContainer />
                }
             />
             <Route 
               path="/checkout" 
               element={
               <Checkout />
               } 
              />
          <Route 
             path='/Cartwidgets' 
             element={
             <CartWidgets/>
             }  
          />

         

          
    </Routes>
     </BrowserRouter>

     {/* <div className="container">
      <Loader />
      </div>
      */}
      <ItemsListContainer/>
      <ItemDetailContainer/>
      
   </div>
 
  );
}
export default App;


