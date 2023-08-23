import React from 'react';
import { add, multiply } from '../utilities/calculate';

const Shoes = () => {
    const first = 50; 
    const second = 50;
    const sum = add(first, second);
    const multi = multiply(first, second);
    return (
        <div>
            <h2>Welcome to Shoes compo</h2>
            <p>Sum: {sum}</p>
            <p>Multiply: {multi}</p>
        </div>
    );
};

export default Shoes;