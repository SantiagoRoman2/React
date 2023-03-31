import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import { Link } from "react-router-dom"

const initial = 1

export const ItemDetail = ({title, description, price, pictureUrl, stock}) => {

    const onAdd = (count) => {
        alert("Agregaste " + count + " items al carrito")
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
                    <Link to={"/cart"}>
                        <button className='add'>Finalizar Compra</button>
                    </Link>
                </center>
            </div>
        </div>
    )
}
