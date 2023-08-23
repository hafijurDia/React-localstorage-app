import React from 'react';
import { addToDb, removeFromDb } from '../utilities/fakedb';

const Cosmetic = (Props) => {

    const {id, name, price} = Props.cosmetic;

    const addToCart = (id) => {
        addToDb(id);
    }

    const removeFromCart = (id) => {
        removeFromDb(id);
    }

    return (
        <div style={{border:'1px solid red',borderRadius:'10px',marginBottom:'15px'}}>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Price: $ {price}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;