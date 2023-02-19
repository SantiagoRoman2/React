import carrito from './carrito.png';
import "./style.css";

const CartWidget = () => {
  return (
    <div className='divCarrito'>
        <img src={carrito} className="Carrito"/>
        5
    </div>
  )
}

export default CartWidget