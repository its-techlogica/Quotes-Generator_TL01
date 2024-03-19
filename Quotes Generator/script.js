// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do - Steve Jobs",
    "Innovation distinguishes between a leader and a follower - Steve Jobs",
    "Stay hungry, stay foolish - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking. -Steve Jobs",
"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon"
];

// Function to generate a random quote
function generateQuote() {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Get the quote at the random index
    const randomQuote = quotes[randomIndex];
    // Display the random quote
    document.getElementById('quoteDisplay').textContent = randomQuote;
}
