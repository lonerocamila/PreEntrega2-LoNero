import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const AppRoutes = () => {
  return (
   <Routes>
    <Route exact path="/about" element={<About />} />
  </Routes>
  );
}

export default AppRoutes;
