// Bottle.jsx
import React from 'react';
import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
   // console.log(bottle);
    const {img, price, name, stock} = bottle;
    
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h2>Price: ${price} </h2>
            <p>In Stock: {stock}</p>
            <button onClick={() => handleAddToCart(bottle)}>Buye Now</button>
        </div>
    );
};

export default Bottle;