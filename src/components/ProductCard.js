import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
        setIsDisabled(true); // Disable button after adding to cart
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart} disabled={isDisabled}>
                {isDisabled ? 'Added' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductCard;
