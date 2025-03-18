async function getQuote() {
    try {
        const response = await fetch('https://ronaldoquotes-node-js-2.onrender.com/api/quote'); 
        const data = await response.json();
        document.getElementById("quote").innerText = data.quote;
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}
