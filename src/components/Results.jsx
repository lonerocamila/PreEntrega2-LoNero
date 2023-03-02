import React from 'react';
import { useState } from 'react';


const Results = (props) => {
    const result = {useState}
  return (
    <div>

      props.results.map((result)=> 

        <div>
        <img src={result.tubmail}></img>
        </div>
        <div>
        <h2>{result.titile}</h2>
        <p>${result.price}</p>
        <p>Cant. de vendidos: {result.quantity}</p>
        </div>
      ))
      
    </div>
  );
}

export default Results;
