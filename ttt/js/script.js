var playerForm = document.getElementById('player-form');
var gamePage = document.getElementById('main-game');
var markers = ["X", "O"];
var whoseTurn = 0;
var notTurn = 1;
var players = [];
var totals = [];
var scoreW = [];
var scoreL = [];
var ties;
var winCodes = [7, 56, 73, 84, 146, 273, 292, 448];
var gameOver;
var feedback = document.getElementById('output');
var winnerAudio = new Audio('audio/winner.mp3');
var tieAudio = new Audio('audio/tie.mp3');

function showForm() {
  playerForm.style.display = "flex";
  gamePage.style.display = "none";
  document.getElementById('button1').style.display = "none";
  document.getElementById('button2').style.display = "none";
  document.getElementById('player1').value = "";
  document.getElementById('player2').value = "";
}

function createBoard() {
  var innerDiv = "";
  var counter = 1;
  for (i = 1; i <= 3; i++) {
    innerDiv += '<div id="row-' + i + '">';

    for (j = 1; j <=3; j++) {
      innerDiv += '<div onclick="playGame(this,' + counter + ');"></div>';
      counter *= 2;
    }
    innerDiv += '</div>';
  }
  document.getElementById('grid').innerHTML = innerDiv;
  totals = [0, 0];
  gameOver = false;
  feedback.innerText = players[notTurn] + "'s turn";
  feedback.style.color = "black";
  feedback.style.textShadow = "white 1px 0 10px";
  document.getElementById('button1').style.display = "none";
  document.getElementById('button2').style.display = "none";
}

function startGame() {
  totals = [0, 0];
  scoreW = [0, 0];
  scoreL = [0, 0];
  ties = 0;
  gameOver = false;
  createBoard();

  players[0] = document.getElementById('player1').value;
  players[1] = document.getElementById('player2').value;
  if(players[0] == "") { players[0] = document.getElementById('player1').value = "player1";}
  if(players[1] == "") { players[1] = document.getElementById('player1').value = "player2";}
  document.getElementById('p1-label').innerText = players[0];
  document.getElementById('p2-label').innerText = players[1];

  document.getElementById('p1-win').innerText = 0;
  document.getElementById('p2-win').innerText = 0;
  document.getElementById('p1-loss').innerText = 0;
  document.getElementById('p2-loss').innerText = 0;
  document.getElementById('ties').innerText = ties;

  feedback.innerText = players[whoseTurn] + "'s turn";
  playerForm.style.display = "none";
  gamePage.style.display = "block";
}

function playGame(div, num) {
  if(!gameOver) {
    div.innerText = markers[whoseTurn];
    totals[whoseTurn] += num;

    if(isWin()) {
      winnerAudio.play();
      feedback.innerText = players[whoseTurn] + " wins!";
      feedback.style.color = "seagreen";
      feedback.style.textShadow = "black 1px 0 10px";
      document.getElementById('button1').style.display = "flex";
      document.getElementById('button2').style.display = "flex";
      scoreW[whoseTurn]++;
      scoreL[notTurn]++;
      
      if(players[whoseTurn] == players[0]) {
        document.getElementById('p1-win').innerText = scoreW[0];
      }
      else {
        document.getElementById('p2-win').innerText = scoreW[1];
      }

      if(players[notTurn] == players[0]) {
        document.getElementById('p1-loss').innerText = scoreL[0];
      }
      else {
        document.getElementById('p2-loss').innerText = scoreL[1];
      }
    }
    else if(gameOver) {
      feedback.innerText = "Tie!";
      feedback.style.color = "mediumblue";
      feedback.style.textShadow = "white 2px 0 10px";
      tieAudio.play();
      document.getElementById('button1').style.display = "flex";
      document.getElementById('button2').style.display = "flex";
      ties++;
      document.getElementById('ties').innerText = ties;
    }
    else {
      if(whoseTurn) {
        whoseTurn = 0;
        notTurn = 1;
      }
      else {
        whoseTurn = 1;
        notTurn = 0;
      }
      div.attributes[0].nodeValue = "";
      feedback.innerText = players[whoseTurn] + "'s turn";
    }
  }
}

function isWin() {
  for (i = 0; i < winCodes.length; i++) {
    if((totals[whoseTurn] & winCodes[i]) == winCodes[i]) {
      gameOver = true;
      return true;
    }
  }
  if(totals[0] + totals[1] == 511) {
    gameOver = true;
  }
}

function nextRound() {

}
