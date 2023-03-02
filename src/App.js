import NavBar from "./components/NavBar";
import axios from "axios"

import { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom"

import Landing from "./components/Landing";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Results from "./components/Results";
import AppRoutes from './AppRoutes';




const firebaseConfig = {
  apiKey: "AIzaSyDaA1hHszkKQSP52jKfNf9TtB07h1VyKN0",
  authDomain: "raveg-ada31.firebaseapp.com",
  projectId: "raveg-ada31",
  storageBucket: "raveg-ada31.appspot.com",
  messagingSenderId: "401331265539",
  appId: "1:401331265539:web:9163aaac82ed29b433ae36",
  measurementId: "G-E7LGQL1RNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  const [search, setSearch] = useState(""); // search term
  const [results, setResults] = useState([])


  useEffect (()=> { 
    if (search != ""){
   fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
   .then((res) => res.json())
   .then ((data) => setResults(data))
    }
  }, [search])

  console.log(results)

  return (
    <div>
      <Results results={results} />
      <NavBar setSearch={setSearch} />
      <Landing />

     <AppRoutes/>
      
   </div>
 
  );
}
export default App


