import gameState from "./components/game-state.js";

const gameBoard = document.querySelectorAll(".field");

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
let snakeDirection = "down";
const snake = [
  [6, 10],
  [5, 10],
  [4, 10],
  [3, 10],
];

document.addEventListener("keypress", (e) => {
  if (e.key === "w") {
    snakeDirection = "up";
  } else if (e.key === "s") {
    snakeDirection = "down";
  } else if (e.key === "a") {
    snakeDirection = "left";
  } else if (e.key === "d") {
    snakeDirection = "right";
  }
});

setInterval(moveSnake, 100);
function moveSnake() {
  if (snakeDirection === "up") {
    const newHeadPosition = [snake[0][0] - 1, snake[0][1]];
    gameState[newHeadPosition[0]][newHeadPosition[1]] = "g";
    snake.unshift(newHeadPosition);
    const lastTailPostion = snake.pop();
    gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
    drawGameBoard();
  } else if (snakeDirection === "down") {
    const newHeadPosition = [snake[0][0] + 1, snake[0][1]];
    gameState[newHeadPosition[0]][newHeadPosition[1]] = "g";
    snake.unshift(newHeadPosition);
    const lastTailPostion = snake.pop();
    gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
    drawGameBoard();
  } else if (snakeDirection === "left") {
    const newHeadPosition = [snake[0][0], snake[0][1] - 1];
    gameState[newHeadPosition[0]][newHeadPosition[1]] = "g";
    snake.unshift(newHeadPosition);
    const lastTailPostion = snake.pop();
    gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
    drawGameBoard();
  } else if (snakeDirection === "right") {
    const newHeadPosition = [snake[0][0], snake[0][1] + 1];
    gameState[newHeadPosition[0]][newHeadPosition[1]] = "g";
    snake.unshift(newHeadPosition);
    const lastTailPostion = snake.pop();
    gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
    drawGameBoard();
  }
}
