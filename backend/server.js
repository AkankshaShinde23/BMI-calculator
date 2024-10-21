// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate-bmi', (req, res) => {
    const { weight, height } = req.body;
    const bmi = (weight / (height * height)).toFixed(2);
    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    res.json({ bmi, category });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
