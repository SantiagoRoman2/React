import React from 'react'
import './Cart.css'
import { Link } from "react-router-dom"
import CartProvider from './CartContext'

function Cart() {
    return (
        <div>
            <center>
                <h3 id='Titulo'>Carrito de Compras</h3>
                <h6>No hay items en el carrito.</h6>
                <Link className='link' to={"/"}><h5>Volver a la Tienda</h5></Link>
            </center>
        </div>
    )
}

export default Cart
