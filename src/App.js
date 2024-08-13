import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import './styles.css';

function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/products" element={<ProductListingPage />} />
                    <Route path="/cart" element={<ShoppingCartPage />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
