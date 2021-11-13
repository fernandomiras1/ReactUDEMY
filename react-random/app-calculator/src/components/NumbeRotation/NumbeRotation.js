import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import './NumbeRotation.css';

const NumbeRotation = () => {
    const [numberRotation, setNumberRotation ] = useState([1, 2, 3, 4, 5])
    
    const numbersRotation = (numbers) => {
        numbers.push(numbers.shift())
        return numbers
    }

    const handleRotation = () => {
        console.log(numbersRotation(numberRotation));
        setNumberRotation(numbersRotation(numberRotation))
    }

    
    return (
        <div className="number-rotation-container">
        <strong>Numbers Rotation:</strong>
        <p className="number-rotation-value">{numberRotation.toString()}</p>
        <button type="button" onClick={handleRotation}>Rotation</button>
      </div>
    )
};

export default NumbeRotation;

