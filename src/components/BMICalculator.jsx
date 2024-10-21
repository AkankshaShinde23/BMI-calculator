// src/BMICalculator.jsx
import React, { useState } from 'react';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/calculate-bmi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ weight, height }),
        });
        const data = await response.json();
        setBmi(data.bmi);
        setCategory(data.category);
    };

    return (
        <div>
            <h1>BMI Calculator</h1>
            <form onSubmit={calculateBMI}>
                <input
                    type="number"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Height (m)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                />
                <button type="submit">Calculate BMI</button>
            </form>
            {bmi && (
                <div>
                    <h2>Your BMI: {bmi}</h2>
                    <p>Category: {category}</p>
                </div>
            )}
        </div>
    );
};

export default BMICalculator;
