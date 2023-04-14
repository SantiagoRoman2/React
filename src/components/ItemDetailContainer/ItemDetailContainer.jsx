import React from 'react'
import { useEffect, useState } from 'react';
import { getArray } from '../helpers/getArray'
import { products } from '../../data/data'
import { ItemDetail } from './ItemDetail'
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState([true])
    const {itemId} = useParams()
    const getProduct = new Promise((res, rej) => {
        setTimeout(() => {
            const findProduct = products.find((item) => item.id == itemId);
            res(findProduct);
        }, 1000);
    });

    const [detailObject, setDetailObject] = useState([]);

    useEffect(() => {
        getProduct
            .then((response) => {
                setDetailObject(response);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <div id='item-detail-container'>
            {
                loading?
                    <div>Cargando...</div>
                :
                    <ItemDetail detail={detailObject}/>
            }
        </div>
    )
}





/* useEffect(() => {
    getArray(products)
        .then(res => {
            const item = res.find((item) => item.id === Number(itemId))
            setProduct(item)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
}, [itemId]) */


/* 
return (
    <div id='item-detail-container'>
        {
            loading?
                <div>Cargando...</div>
            :
                <ItemDetail {...product}/>
        }
    </div>
) */