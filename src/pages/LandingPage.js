import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';  // Import your styles

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="background-image">
                <h1>Paradise Nursery</h1>
                <p>Welcome to Paradise Nursery, your ultimate destination for lush, vibrant greenery and botanical beauty. Nestled in the heart of the community, our nursery offers an exquisite selection of houseplants, from rare tropicals to low-maintenance favorites. Whether you're an experienced plant enthusiast or just beginning your green journey, Paradise Nursery is dedicated to providing you with high-quality plants, expert advice, and personalized service. Explore our serene garden oasis and let us help you cultivate a space filled with natural wonder and tranquility.</p>
                <Link to="/products">
                    <button className="get-started-button">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
