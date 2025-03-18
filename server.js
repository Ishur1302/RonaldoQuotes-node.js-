// Importing Express framework
const express = require("express");

// Creating an Express application
const app = express();

// Defining the port number for the server
const PORT = 3003;

// Array of Cristiano Ronaldo's quotes
const quotes = [
    "Your love makes me strong, your hate makes me unstoppable.",
    "I don’t have to show anything to anyone. There is nothing to prove.",
    "If you don’t believe you are the best, then you will never achieve all that you are capable of.",
    "Talent without working hard is nothing.",
    "Dreams are not what you see in your sleep, dreams are things which do not let you sleep.",
    "I see football as an art and all players are artists.",
    "I never tried to hide the fact that my only goal is to be the best."
];

// Serve static files from the "public" directory
app.use(express.static("public"));

// API endpoint to get a random Ronaldo quote
app.get("/api/quote", (req, res) => {
    // Selecting a random quote from the array
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Sending the random quote as a JSON response
    res.json({ quote: randomQuote });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    // Fix: Corrected template literal syntax
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});