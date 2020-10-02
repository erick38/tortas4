//recieved help from tutors

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
        x++;
      } else if (boardModel[y][i] !== player) {
        x = 0;
      }
      if (x > 3) {
        alert(player + "wins");
        setTimeout(function () {
          location.reload();
        }, 500);
      }
    }
  }
}
function checkForTie() {
  for (i = 0; i < 1; i++) {
    for (j = 0; j < 1; j++) {
      if (
        boardModel[i][j] != null &&
        boardModel[i][j + 1] != null &&
        boardModel[i][j + 2] != null &&
        boardModel[i][j + 3] != null &&
        boardModel[i][j + 4] != null &&
        boardModel[i][j + 5] != null &&
        boardModel[i][j + 6] != null
      ) {
        console.log("you filled it up");
        setTimeout(function () {
          location.reload();
        }, 500);
      }
    }
  }
  if (setDiscCount === 42) {
    alert("you cannot add anymore discs to the board");
    setTimeout(function () {
      location.reload();
    }, 500);
  }
}
function checkforHorizontalWin() {
  for (let i = 0; i < boardModel.length; i++) {
    let x = 0;
    for (let y = 0; y < boardModel[i].length; y++) {
      if (boardModel[i][y] === player) {
        x++;
        console.log(x, i, y);
      } else if (boardModel[i][y] !== player) {
        x = 0;
      }
      if (x > 3) {
        alert(player + "wins");
        setTimeout(function () {
          location.reload();
        }, 500);
      }
    }
    console.log(boardModel, x);
  }
}
// console.log(boardModel);

function checkforaUpDiagonalWin() {
  for (let i = boardModel.length - 1; i > 2; i--) {
    let x = 0;
    for (let y = 0; y < boardModel[i].length; y++) {
      if (
        boardModel[i][y] === player &&
        boardModel[i - 1][y + 1] === player &&
        boardModel[i - 2][y + 2] === player &&
        boardModel[i - 3][y + 3] === player
      ) {
        alert(player + " " + "wins");
        setTimeout(function () {
          location.reload();
        }, 500);
      }
    }
  }
}

function checkforaDownDiagonalWin() {
  for (let i = 0; i < boardModel.length - 3; i++) {
    let x = 5;
    for (let y = 0; y < boardModel[i].length; y++) {
      if (
        boardModel[i][y] === player &&
        boardModel[i + 1][y + 1] === player &&
        boardModel[i + 2][y + 2] === player &&
        boardModel[i + 3][y + 3] === player
      ) {
        alert(player + " " + "wins");
        setTimeout(function () {
          location.reload();
        }, 500);
      }
    }
  }
}

let columnClickHandler = function (evt) {
  let clicked = evt.currentTarget;

  let col = Number(clicked.id.slice(-1));

  for (let row = boardModel.length - 1; row >= 0; row--) {
    if (boardModel[row][col] === null) {
      boardModel[row][col] = player;
      console.log(setDiscCount++);

      checkforVerticalWin();
      checkforHorizontalWin();
      checkforaUpDiagonalWin();
      checkforaDownDiagonalWin();
      checkForTie();
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
