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
app.get('/', async (req, res) => {
    res.send('Hello World');
});

// Get all lottery data
app.get('/lottery', async (req, res) => {
    setTimeout(() => {
        // Simulating a 1-second delay
        res.json(lotteryData);
    }, 1000);  
});

// Get a single lottery entry by ID
app.get('/lottery/:id', async (req, res) => {
    setTimeout(() => {
        const entry = lotteryData.find(e => e.id === parseInt(req.params.id));
        if (!entry) return res.status(404).send('Lottery entry not found');
        // Simulating a 1-second delay
        res.json(entry);
    }, 1000);  
});

// Create a new lottery entry
app.post('/lottery', async (req, res) => {
    setTimeout(() => {
        const newEntry = {
            // Simple ID assignment
            id: lotteryData.length + 1,  
            ...req.body
        };
        lotteryData.push(newEntry);
        // Simulating a 1-second delay
        res.status(201).json(newEntry);
    }, 1000);  
});

// Update a lottery entry by ID
app.put('/lottery/:id', async (req, res) => {
    setTimeout(() => {
        const entry = lotteryData.find(e => e.id === parseInt(req.params.id));
        if (!entry) return res.status(404).send('Lottery entry not found');

        Object.assign(entry, req.body);
        // Simulating a 1-second delay
        res.json(entry);
    }, 1000);  
});

// Delete a lottery entry by ID
app.delete('/lottery/:id', async (req, res) => {
    setTimeout(() => {
        const entryIndex = lotteryData.findIndex(e => e.id === parseInt(req.params.id));
        if (entryIndex === -1) return res.status(404).send('Lottery entry not found');

        lotteryData.splice(entryIndex, 1);
        // Simulating a 1-second delay
        res.status(204).send();
    }, 1000);  
});

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);