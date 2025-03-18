async function getQuote() {
    const response = await fetch('/api/quote');
    const data = await response.json();
    document.getElementById('quote').innerText = data.quote;
}