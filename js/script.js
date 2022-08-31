/******************************************
Treehouse FSJS Techdegree: Matthew Akroyd
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



//an array of objects that stores the quotes that will be used for the random quote generator

var quotes = [
    {quote: "the only easy day was yesterday", source: "navy seal moto"},
    {quote: "We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard", source: "John F. Kennedy", citation: "Rice Moon Speech", year: "1962", tag: "science"},
    {quote: "The universe is a pretty big place. If it’s just us, seems like an awful waste of space.", source: "Carl Sagan"},
    {quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", source: "James Cameron"},
    {quote: "Greatness from small beginnings.", source: "Sir Francis Drake"}
];

var colors = ["red", "blue", "green", "orange", "purple"];





//creates a getRandomQuote function that creates a random number between 0-5 for the amount of quotes that are being used

var getRandomQuote = () => {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
};



/***
creates a print function that:
1. sets a variable to the getRanomQuote function
2. creates an empty string to store a string to be added to html in the future depending on the quote being used
3. uses conditional statements to see if the quotes have citations or years in their object
4. selects the div in the html by its id and changes the innerHTML to the one set by the conditional statements
***/
var printQuote = () => {
    var i = getRandomQuote()
    var html = '';
    var quote = i.quote;
    var source = i.source;
    html += '<p class="quote">' + quote + '</p>';
    html += '<p class="source"> ' + source ;


    if(i.citation){
       html += '<span class="citation">' + i.citation + '</span>';
   }
   if(i.year){
       html += '<span class="year">' + i.year + '</span> </p>';
   }

   if (i.tag) {
       html += '<span class="tag">' + i.tag + '</span> </p>';
   }

   html += '</p>'

    var quoteBoxDiv = document.getElementById('quote-box');
    quoteBoxDiv.innerHTML = html;


    document.body.style.backgroundColor = colors[Math.floor(Math.random() * quotes.length)];


};







//created an if statement for if button is clicked printQuote runs but if it isnt clicked within 10 seconds setInterval will run printQuote


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
setInterval(printQuote, 10000);



// Remember to delete the comments that came with this file, and replace them with your own code comments.
