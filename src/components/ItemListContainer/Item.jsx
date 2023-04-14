import React, {useContext} from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'


export const Item = ({ id, title, description, price, pictureUrl, onAddToCart }) => {
    return (
        <>
        <Card style={{ width: '18rem' }} id="Item">
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">
                    <Link to={`/item/${id}`} id='ver'>
                        Ver más
                    </Link>
                </Button>
            </Card.Body>
        </Card>
        </>
    )
}
