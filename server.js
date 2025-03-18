const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003; // Use process.env.PORT for Render deployment

// Ronaldo Quotes
const quotes = [
    "Your love makes me strong, your hate makes me unstoppable.",
    "I don’t have to show anything to anyone. There is nothing to prove.",
    "If you don’t believe you are the best, then you will never achieve all that you are capable of.",
    "Talent without working hard is nothing.",
    "Dreams are not what you see in your sleep, dreams are things which do not let you sleep.",
    "I see football as an art and all players are artists.",
    "I never tried to hide the fact that my only goal is to be the best."
];

// Serve static files from 'public' folder
app.use(express.static("public"));

// API Route to get a random quote
app.get("/api/quote", (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote });
});

// Homepage Route
app.get("/", (req, res) => {
    res.send("Welcome to Ronaldo Quotes API! Go to /api/quote to get a quote.");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
