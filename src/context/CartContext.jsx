import React, {useState, useContext} from 'react'
const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [total, setTotal]  = useState(0);
    const product = [];
    
    const addItem = (item, quantity) => {
        setTotal(total + item.price * quantity)

        if (isInCart(item.id)) {
            const newCart = cart.map((product) => {
                if(product.id === item.id){
                    product.quantity = product.quantity + quantity;
                    setCantidad(cantidad + quantity);
                    return product
                } else {
                    return product
                }
            })
            setCart(newCart);
        } 
        else {
            const product = {
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                pictureUrl: item.pictureUrl,
                category: item.category,
                stock: item.stock,
                cantidad: quantity,
            }
            setCart([...cart, product ]);
            setCantidad(cantidad + quantity);
        };
 
    };

    const clearCart = () => {
        setCart([]);
        setCantidad(0);
    }

    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id))
    };

    const isInCart = (id) => {

        if(cart.find((product) => product.id === id )) {
            return true;
        } else { 
            return false; 
        }
    }

    return (
      <CartContext.Provider value={{cart, addItem, clearCart, removeItem, total, cantidad }}>
        {children}
      </CartContext.Provider>
    );
  };

export default CartContext 


