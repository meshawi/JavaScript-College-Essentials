var quotes = [
    "احذر تسلم",
    "الاجتهاد خير مثال",
    "مبارك سبك  ",
]
let quotetext = document.querySelector(".quote_text");


function generateQuote(){

var randomIndex = Math.floor(Math.random() * quotes.length);
var quote = quotes[randomIndex]
quotetext.innerHTML = '"' +quote+ '"'


}




















