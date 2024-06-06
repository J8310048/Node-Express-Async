const express = require('express');
const app = express();
const PORT = 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory mock database
let lotteryData = [
    {
        id: 1,
        lotteryWin: 50000,
        name: "Johnny Tuesday",
        occupation: "Engineer"
    },
    {
        id: 2,
        lotteryWin: 100,
        name: "Molly RingWald",
        occupation: "Server"
    },
    {
        id: 3,
        lotteryWin: 10000,
        name: "Jerry SeinField",
        occupation: "Comedian"
    },
    {
        id: 4,
        lotteryWin: 30450,
        name: "Jennifer Lawrence",
        occupation: "Actress"
    }
];

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Get all lottery data
app.get('/lottery', (req, res) => {
    setTimeout(() => {
        res.json(lotteryData);
    }, 1000);  // Simulating a 1-second delay
});

// Get a single lottery entry by ID
app.get('/lottery/:id', (req, res) => {
    setTimeout(() => {
        const entry = lotteryData.find(e => e.id === parseInt(req.params.id));
        if (!entry) return res.status(404).send('Lottery entry not found');
        res.json(entry);
    }, 1000);  // Simulating a 1-second delay
});

// Create a new lottery entry
app.post('/lottery', (req, res) => {
    setTimeout(() => {
        const newEntry = {
            id: lotteryData.length + 1,  // Simple ID assignment
            ...req.body
        };
        lotteryData.push(newEntry);
        res.status(201).json(newEntry);
    }, 1000);  // Simulating a 1-second delay
});

// Update a lottery entry by ID
app.put('/lottery/:id', (req, res) => {
    setTimeout(() => {
        const entry = lotteryData.find(e => e.id === parseInt(req.params.id));
        if (!entry) return res.status(404).send('Lottery entry not found');

        Object.assign(entry, req.body);
        res.json(entry);
    }, 1000);  // Simulating a 1-second delay
});

// Delete a lottery entry by ID
app.delete('/lottery/:id', (req, res) => {
    setTimeout(() => {
        const entryIndex = lotteryData.findIndex(e => e.id === parseInt(req.params.id));
        if (entryIndex === -1) return res.status(404).send('Lottery entry not found');

        lotteryData.splice(entryIndex, 1);
        res.status(204).send();
    }, 1000);  // Simulating a 1-second delay
});

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);