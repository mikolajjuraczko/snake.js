import gameState from "./modules/game-state.js";

const gameBoard = document.querySelectorAll(".field");

// for (let i = 0; i < 374; i++) {
//   fieldsList[i].classList.add("red");
// }

function drawGameBoard() {
  let f = 0;
  gameState.forEach((row) =>
    row.forEach((element) => {
      if (element === "w") {
        gameBoard[f].style.backgroundColor = "red";
      } else if (element === "g") {
        gameBoard[f].style.backgroundColor = "green";
      } else if (element === "o") {
        gameBoard[f].style.backgroundColor = "white";
      }
      f++;
    })
  );
}

drawGameBoard();
let playerLocation = [6, 10];
document.addEventListener("keypress", (e) => {
  if (e.key === "w") {
    gameState[playerLocation[0]][playerLocation[1]] = "o";
    playerLocation[0]--;
    gameState[playerLocation[0]][playerLocation[1]] = "g";
    drawGameBoard();
  } else if (e.key === "s") {
    gameState[playerLocation[0]][playerLocation[1]] = "o";
    playerLocation[0]++;
    gameState[playerLocation[0]][playerLocation[1]] = "g";
    drawGameBoard();
  } else if (e.key === "a") {
    gameState[playerLocation[0]][playerLocation[1]] = "o";
    playerLocation[1]--;
    gameState[playerLocation[0]][playerLocation[1]] = "g";
    drawGameBoard();
  } else if (e.key === "d") {
    gameState[playerLocation[0]][playerLocation[1]] = "o";
    playerLocation[1]++;
    gameState[playerLocation[0]][playerLocation[1]] = "g";
    drawGameBoard();
  }
});
