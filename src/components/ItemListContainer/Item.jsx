import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"


export const Item = ({id, title, description, price, pictureUrl}) => {
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
