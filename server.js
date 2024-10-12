const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const supplementRoutes = require('./routes/supplementRoutes');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the Health Store API",
        id: "706"
    });
});

app.use('/', supplementRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
