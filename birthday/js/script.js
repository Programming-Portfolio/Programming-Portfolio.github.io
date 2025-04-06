var name = prompt("What is your name?");
var age = prompt("What is your age?");
var in_month = prompt("What month were you born?");
var month = in_month.toLowerCase();
var stone, season;

switchLoop(month);

function switchLoop(value){
  switch(value) {
    case "january":
      season = "winter";
      stone = "garnet";
      break;
    case "february":
      season = "winter";
      stone = "amethyst";
      break;
    case "march":
      season = "spring";
      stone = "aquamarine";
      break;
    case "april":
      season = "spring";
      stone = "diamond";
      break;
    case "may":
      season = "spring";
      stone = "emerald";
      break;
    case "june":
      season = "summer";
      stone = "pearl";
      break;
    case "july":
      season = "summer";
      stone = "ruby";
      break;
    case "august":
      season = "summer";
      stone = "peridot";
      break;
    case "september":
      season = "fall";
      stone = "sapphire";
      break;
    case "october":
      season = "fall";
      stone = "opal";
      break;
    case "november":
      season = "fall";
      stone = "topaz";
      break;
    case "december":
      season = "winter";
      stone = "tanzanite";
      break;
    default: 
      in_month = prompt("Please enter a valid month");
      month = in_month.toLowerCase();
      return switchLoop(month);
  }
}


alert("Hello " + name + ". You are " + age + " years old. You were born in " + month + " which is in the " + season + " and your birthstone is " + stone + ".");


