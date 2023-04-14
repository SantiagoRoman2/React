import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import { Link } from "react-router-dom"
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
 

const initial = 1

export const ItemDetail = ({ detail }) => {
    const {addItem} = useContext(CartContext);

    const [count, setCount] = useState(initial);

    const onAdd = (event) => {
       event.preventDefault();
       console.log({ ...detail, quantity: count});
    }
    function Agregar() {
        addItem(detail, count)
    }

    return (
        <div id='item-detail'>
            <div id='portada'>
                <center><img src={detail.pictureUrl} alt={detail.title} id='foto'/></center>
            </div>
            <div id='data'>
                <center>
                    <h1>{detail.title}</h1>
                    <h5>{detail.description}</h5>
                    <h3>${detail.price}</h3>
                    <ItemCount count={count} setCount={setCount} stock={detail.stock} initial={initial} onAdd={onAdd}/>
                    <button className='add' onClick={Agregar}>Agregar al carrito</button>
                   {/*  <button onClick={onAdd}>Agregar al carrito</button> */}
                    <Link to={"/cart"}>
                        <button className='add'>Finalizar Compra</button>
                    </Link>
                    {/* <ItemCount count={count} setCount={setCount}/> */}
                </center>
            </div>
        </div>
    )
}



/* 
const initial = 1


export const ItemDetail = ({ detail, title, description, price, pictureUrl, stock }) => {
    
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0);

    const onAdd = (count) => {
        alert("Agregaste " + count + " items al carrito");
    }

    return (
        <div id='item-detail'>
            <div id='portada'>
                <center><img src={pictureUrl} alt={title} id='foto'/></center>
            </div>
            <div id='data'>
                <center>
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                    <h3>${price}</h3>
                    <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
                    <button onClick={() => addItem(detail, count)}>Agregar al carrito</button>
                    <Link to={"/cart"}>
                        <button className='add'>Finalizar Compra</button>
                    </Link>
                </center>
            </div>
        </div>
    )
} */