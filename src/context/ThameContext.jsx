import React, { createContext } from 'react'

//defino un contexto, con un valor por defecto
const ThameContext = {createContext} ({
    darkMode: false,
    toggleBarMode: () => {}
})

export default ThameContext;


// el ThameContext tiene dos propiedades, un provider y un consumer: cuando trabajamos con hoocks consumimos el provider del createContext para consumir el estado 