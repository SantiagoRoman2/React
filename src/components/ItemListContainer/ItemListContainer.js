import React from 'react'
import { getArray } from '../helpers/getArray';
import { products } from '../../data/data';
import './ItemListContainer.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({}) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState([true])
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        getArray(products)
            .then(res => {
                categoryId?
                    setItems (res.filter((item) => item.category === categoryId))
                :
                    setItems(res)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        
        <div>
            <center>
                <h3 id='Titulo'>Bienvenido a TELSTAR</h3>
            </center>
            <div id='item-list-container'>
                {
                    loading?
                    <div>Cargando...</div>
                :
                    <ItemList items={items}/>
                }
            </div>
        </div>
        
    )
}

export default ItemListContainer