let setDiscCount = 0; //adding to for loop


let playerDisc;
let board = document.querySelector("#board");

let player = "playerYellow";
let gameState = "red";
let boardModel = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

let switchPlayers = function () {
  playerDisc = document.createElement("div");
  if (player === "playerYellow") {
    player = "playerRed";

    console.log("1");

  } else {
    player = "playerYellow";
    console.log("2");
  }

};

// adding win count vertically //

function checkforVerticalWin() {

  let x = 0;
  for (let i = 0; i < boardModel[0].length; i++) {
    for (let y = 0; y < boardModel.length; y++) {
      if (boardModel[y][i] === player) {
        x++
      }
      else if (boardModel[y][i] !== player) {
        x = 0;
      }
      if (x > 3) {
        alert(player + "wins")
      }
    }

  }
}

function checkforHorizontalWin() {

  for (let i = 0; i < boardModel.length; i++) {

    let x = 0;
    for (let y = 0; y < boardModel[i].length; y++) {
      if (boardModel[i][y] === player) {
        x++
        console.log(x, i, y)
      }
      else if (boardModel[i][y] !== player) {
        x = 0;
      }
      if (x > 3) {
        alert(player + "wins")
      }
    } console.log(boardModel, x)
  }
}
// console.log(boardModel);

let columnClickHandler = function (evt) {

  let clicked = evt.currentTarget;

  let col = Number(clicked.id.slice(-1));

  for (let row = boardModel.length - 1; row >= 0; row--) {
    if (boardModel[row][col] === null) {
      boardModel[row][col] = player;
      checkforVerticalWin()
      checkforHorizontalWin()
      break;
    }
  }


  playerDisc = document.createElement("div");
  playerDisc.className = "piece";

  if (player === "playerYellow" && clicked.childElementCount < 6) {
    playerDisc.classList.add("piece", "yellow");
    clicked.appendChild(playerDisc);
  }
  if (player === "playerRed" && clicked.childElementCount < 6) {
    playerDisc.classList.add("piece", "red");
    clicked.appendChild(playerDisc);
  }
  switchPlayers();

};

//whenever red makes their move, it will become yellow turn, gameState equals yellow
//whenever yellow makes their move, it will become red turn, gameState equals red

let createColumnEventListener = function () {

  document.querySelector("#col0").addEventListener("click", columnClickHandler);
  document.querySelector("#col1").addEventListener("click", columnClickHandler);
  document.querySelector("#col2").addEventListener("click", columnClickHandler);
  document.querySelector("#col3").addEventListener("click", columnClickHandler);
  document.querySelector("#col4").addEventListener("click", columnClickHandler);
  document.querySelector("#col5").addEventListener("click", columnClickHandler);
  document.querySelector("#col6").addEventListener("click", columnClickHandler);
};
createColumnEventListener();

  // First Step
  // Creating the game
  // 1.) Board View
  // 2.) Add Click Handlers


  // Second Step


  // Psuedocode if statement
  // I'll need a game state for this game.
  // if gameState is set 'red', red may drop their piece in a column
  // set the game state to yellow
  // If gamestate is yellow, yellow may drop their piece in a column */

  //Lines Below is old code 
  // All Code Here will be rechecked

  // createColumnEventListener()
  // /*
  // First Step
  // Creating the game
  // 1.) Board View
  // 2.) Add Click Handlers


  // Second Step

  // /*
  // Psuedocode if statement
  // I'll need a game state for this game.
  // if gameState is set 'red', red may drop their piece in a column
  // set the game state to yellow
  // If gamestate is yellow, yellow may drop their piece in a column */
  //

