async function getQuote() {
    try {
        const response = await fetch('https://ronaldoquotes-node-js-1.onrender.com/api/quote'); // Use Render API
        const data = await response.json();
        document.getElementById("quote").innerText = data.quote;
    } catch (error) {
        console.error("Error fetching quote:", error);
        document.getElementById("quote").innerText = "Failed to load quote. Try again!";
    }
}

// Load a quote when the page loads
document.addEventListener("DOMContentLoaded", getQuote);
