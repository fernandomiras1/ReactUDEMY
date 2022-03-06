import React,  { useState } from 'react';
import './NumbeRotation.css';

const NumbeRotation = () => {
    const [numberRotation, setNumberRotation ] = useState([1, 2, 3, 4, 5])
    const [value, setValue] = useState('')

    const numbersRotation = (numbers) => {
        numbers.push(numbers.shift())
        return numbers
    }

    const handleRotation = () => {
        setNumberRotation(numbersRotation(numberRotation))
        setValue(numberRotation.toString())
    }

    return (
        <div className="number-rotation-container">
        <strong>Numbers Rotation:</strong>
        <p className="number-rotation-value">{value}</p>
        <button type="button" onClick={handleRotation}>Rotation</button>
      </div>
    )
};

export default NumbeRotation;

