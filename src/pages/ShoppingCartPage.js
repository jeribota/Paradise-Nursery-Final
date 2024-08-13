import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import Header from '../components/Header';

const ShoppingCartPage = () => {
    const { cartItems, totalCost } = useContext(CartContext);

    return (
        <>
            <Header />
            <div className="shopping-cart">
                <h2>Your Shopping Cart</h2>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
                <div className="cart-summary">
                    <p>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
                    <p>Total Cost: ${totalCost.toFixed(2)}</p>
                    <button 
                    className="checkout-button"
                    onClick={(e)=>{
                        e.target.innerText = 'Coming soon';
                    }}
                    >Checkout</button>
                    
                    <a href='paradise-nursery\src\pages\ProductListingPage.js'>
                        <button className="checkout-button">Continue Shopping</button> </a>
                    
                </div>
            </div>
        </>
    );
};

export default ShoppingCartPage;
