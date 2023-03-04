import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams(); 

    useEffect(() => {
        // Obtemos los datos de la API
        fetch(`https://fakestoreapi.com/${id}`)
        .then ((response) => response.json())
        .then ((data) => setItem(data))
        .catch((error) => console.log(error))
    }, [id]);

    return (
        <div>
            
            <ItemDetail item={item} />
        </div>

    );
}

export default ItemDetailContainer;