let setDiscCount = 0; //adding to for loop

// let red = document.querySelector('.red')

// let yellow = document.querySelector('.yellow')
let playerDisc;
let board = document.querySelector("#board");
// player1[]
// player2[]
// let playerRed;
// let playerYellow; 
let player = "playerYellow";
let boardModel = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];
let gameState = "red";
let droppedDiscIntoColumn = function (columnElement) {
  //this function will be checking for if there a column is completely full,
  // if the column is full, make sure that nothing is able to be placed in the column.
  let full = 0;
};
let createColumnEventListener = function () {
  //add a queryselector
  document.querySelector("#col1").addEventListener("click", columnClickHandler);
  document.querySelector("#col2").addEventListener("click", columnClickHandler);
  document.querySelector("#col3").addEventListener("click", columnClickHandler);
  document.querySelector("#col4").addEventListener("click", columnClickHandler);
  document.querySelector("#col5").addEventListener("click", columnClickHandler);
  document.querySelector("#col6").addEventListener("click", columnClickHandler);
  document.querySelector("#col7").addEventListener("click", columnClickHandler);
  // document.querySelector('col2').addEventListener(click,columnClickHandler
};


let columnClickHandler = function (evt) {
  //whenever the mouse hovers over this column, it'll click the item
  let clicked = evt.currentTarget;
  // console.log(clicked)
//   switchPlayers();
  playerDisc = document.createElement("div");
    playerDisc.className= 'piece'
    // playerDisc.className = 'yellow'
    clicked.appendChild(playerDisc)
    switchPlayers();
    // if (player === 'playerYellow') {
    //     playerDisc.classList.add("piece", "yellow");
    //     clicked.appendChild(playerDisc);
    // } else {
    //     playerDisc.classList.add('piece','red')
    //     clicked.appendChild(playerDisc);
    // }
};
let switchPlayers = function () {
  playerDisc = document.createElement("div");
  if (player === "playerYellow") {
    // playerDisc.classList.add("piece", "yellow");
    player = "playerRed";

    console.log("1");
    
  } else {
    // playerDisc.classList.add("piece", "red");
    player = "playerYellow";
    console.log("2");
    
  }

  //whenever red makes their move, it will become yellow turn, gameState equals yellow
  //whenever yellow makes their move, it will become red turn, gameState equals red
};

createColumnEventListener();
let col;

// for (col = 0; i < boardModel.length; col++){
//     const newMap = boardModel[col]
//     //
//}
/*
First Step
Creating the game
1.) Board View
2.) Add Click Handlers


Second Step


Psuedocode if statement
I'll need a game state for this game.
if gameState is set 'red', red may drop their piece in a column
set the game state to yellow
If gamestate is yellow, yellow may drop their piece in a column */

//Lines Below is old code 
// All Code Here will be rechecked
// [let setDiscCount = 0; //adding to for loop
// let connectFourBoardModel = [[null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null]]



// // let winningCombinations = [
// //     [0, 0]
// // ]
// // { 0 }

// let gameState = 'red'
// let droppedDiscIntoColumn = function (columnElement) {
//     //this function will be checking for if there a column is completely full,
//     // if the column is full, make sure that nothing is able to be placed in the column.
// }
// let createColumnEventListener = function () {
//     //add a queryselector
//     document.querySelector('#col1').addEventListener('click', columnClickHandler)
//     document.querySelector('#col2').addEventListener('click', columnClickHandler)
//     document.querySelector('#col3').addEventListener('click', columnClickHandler)
//     document.querySelector('#col4').addEventListener('click', columnClickHandler)
//     document.querySelector('#col5').addEventListener('click', columnClickHandler)
//     document.querySelector('#col6').addEventListener('click', columnClickHandler)
//     document.querySelector('#col7').addEventListener('click', columnClickHandler)
//     // document.querySelector('col2').addEventListener(click,columnClickHandler
// }

// let columnClickHandler = function (evt) {
//     //whenever the mouse hovers over this column, it'll click the item
//     let clicked = evt.currentTarget
//     console.log(clicked)
// }

// let switchPlayers = function () {
//     //whenever red makes their move, it will become yellow turn, gameState equals yellow
//     //whenever yellow makes their move, it will become red turn, gameState equals red
// }
// createColumnEventListener()
// /*
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
// //----------------------------------------------------------------]