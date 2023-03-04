// import React, { Children } from 'react';
// import { useState } from 'react';
// import { Products } from 'getProducts';
// import Item from '../components/Item';

// const CartContext = createContext()


// // Const encargada de proveer el contexto. 
// const CartProvider = (props) => {
//     //  creamos un estado para almacenar el estado del carrito de compras 
//     const [cartItems, setCartItems] = useState([])

//     // funciones para manipular el estado del carrito
    
//     // vaciar carrito
//     const clearCart = () => {
//         setItem([])
//     }

//     // varificar si un prodducto esta en el carrito
//     const isInCart = (id) => {
//         return Item.find((Product))=> product.id === id ) ? true : false
//     }

//     // eliminar un producto del carrito

//     const removeProduct = () =>{
//        const NewCartItems = Item.filter((cartItem)) => Item.id !== id )
//        setCartItems(NewCartItems)
    
//     }


//     // agregar un producto al carrito

//         const addProduct = (item, quantity) => {
//             // Utilizar la función
        
//     //  obtener la cantidad total de productos en el carrito 
//     const getTotalQuantity = () =>{
//         let total = 0
//         cartItems.forEach((item) => {
//             total +=
//         });
//     }

//     }
//     return(
//         // usamos el context para proveer el estado del carrito y las funciones que lo manipulan 
//         <CartContext.Provider value={ {Item, addProduct, removeProduct, clearCart, isInCart}} >
//         {Children}
//         </CartContext.Provider>
//     )
// }

// export { CartProvider }
// export default CartContext;
