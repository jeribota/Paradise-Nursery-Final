import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import CartIcon from './CartIcon';

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header >
            <nav className ='nav'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/products">Products</Link>
                <Link className='link' to="/cart">
                    <CartIcon /> ({totalItems})
                </Link>
            </nav>
        </header>
    );
};

export default Header;
