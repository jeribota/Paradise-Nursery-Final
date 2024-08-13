import React, { useContext } from 'react';
import { CartContext } from  '../contexts/CartContext';

const CartItem = ({ item }) => {
    const { increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
    );
};

export default CartItem;
