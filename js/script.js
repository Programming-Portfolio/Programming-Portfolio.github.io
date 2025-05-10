var quote1 = '"Believe you can and you\'re halfway there." -Theodore Roosevelt';
var quote2 = '"Never regret anything that made you smile." -Mark Twain';
var quote3 = '"The best way out is always through." -Robert Frost';
var quote4 = '"Be yourself; everyone else is already taken." -Oscar Wilde';
var quote5 = '"You are never too old to set a new goal or to dream a new dream." -C.S. Lewis';
var quote;
var audio = new Audio('audio/mouse-click.mp3');


function generateQuote() {
  audio.play();
  num = Math.floor(Math.random() * 5) + 1; 
  switch(num) {
    case 1: 
      quote = quote1;
      break;
    case 2: 
      quote = quote2;
      break;
    case 3: 
      quote = quote3;
      break;
    case 4: 
      quote = quote4;
      break;
    case 5:
      quote = quote5;
      break;
    default:
      quote = quote5;
      break;
  }
  document.getElementById("quote").innerText = quote;
}




