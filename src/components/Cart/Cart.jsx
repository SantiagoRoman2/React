import React, { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';


function Cart() {
  const [products, setProducts] = useState([]);

  const { cart, clearCart, removeItem, total } = useContext(CartContext);
  console.log('total', total)

  return (
    <div>
      {
        cart.map ((product, key) => (
          <div 
          style={{display: 'flex', flexDirection: 'row', width: '300px', just6ifyContent:'space-between'}} 
          key={key}>
            <img src={product.pictureUrl} style={{width:'100px', height:'100px'}} alt="" />
            <h2> {product.title} </h2>
            <h5> {product.cantidad} </h5>
            <button onClick={() => removeItem(product.id)}> X </button>
          </div>
        ))
      }
      {
        cart.length > 0 && <button onClick={clearCart}> Vaciar carrito </button>
      }
      <h2><center> Carrito de compras </center></h2>
      <p><center> Total: ${total} </center></p>
      
    </div>
  );
}

export default Cart;