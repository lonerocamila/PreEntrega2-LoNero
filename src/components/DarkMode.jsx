import React from "react";
import ThameContext from '../context/ThameContext';


// Definimos un contexto, con un valor por defecto

const ThameContext = createContext ({
    darkMode: false, 
    togggleDarkMode: () => {}
})
