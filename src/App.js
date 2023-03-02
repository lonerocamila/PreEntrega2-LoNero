import NavBar from "./components/NavBar";
import axios from "axios"

import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom"
import Landing from "./components/Landing";
import Results from "./components/Results";




function App() {
  const [search, setSearch] = useState(""); // search term
  const [results, setResults] = useState([])


  useEffect (()=> { 
    if (search != ""){
   fetch(`https://fakestoreapi.com/products/1`)
   .then((res) => res.json())
   .then ((data) => setResults(data))
    }
  }, [search])

  console.log(results)

  return (
    <div>
    
      <NavBar setSearch={setSearch} />

      
     
      
   </div>
 
  );
}
export default App


