var user_num = prompt("How many numbers?");
var num = [];
var lottoPicks;

while(parseInt(user_num) == 0 || parseInt(user_num) > 6)
{
  alert("Invalid Number");
  user_num = prompt("Please enter a number between 1-6");
}

generateLotto();

function generateLotto() {
  lottoPicks = "";

  for(i = 0; i < user_num; i++) {
    num[i] = Math.ceil(Math.random() * 99);
  }  

  for(i = 0; i < num.length; i++) {
    if (i == 0) {
    lottoPicks += num[i];
    }
    else {
    lottoPicks += "-" + num[i];
    }
  }   
  document.getElementById("lotto_num").innerText = lottoPicks;
}

