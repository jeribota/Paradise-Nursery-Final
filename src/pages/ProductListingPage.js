import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const ProductListingPage = () => {
    const { products } = useContext(CartContext);

    return (
        <>
            <Header />
            <div className="product-listing">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductListingPage;
