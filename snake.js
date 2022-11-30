import gameState from "./components/game-state.js";

const gameBoard = document.querySelectorAll(".field");

function drawGameBoard() {
  let f = 0;
  gameState.forEach((row) =>
    row.forEach((element) => {
      if (element === "w") {
        gameBoard[f].style.backgroundColor = "gray";
      } else if (element === "g") {
        gameBoard[f].style.backgroundColor = "green";
      } else if (element === "a") {
        gameBoard[f].style.backgroundColor = "red";
      } else {
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
    const newHeadY = snake[0][0] - 1;
    if (snake[1][0] !== newHeadY) snakeDirection = "up";
  } else if (e.key === "s") {
    const newHeadY = snake[0][0] + 1;
    if (snake[1][0] !== newHeadY) snakeDirection = "down";
  } else if (e.key === "a") {
    const newHeadX = snake[0][1] - 1;
    if (snake[1][1] !== newHeadX) snakeDirection = "left";
  } else if (e.key === "d") {
    const newHeadX = snake[0][1] + 1;
    if (snake[1][1] !== newHeadX) snakeDirection = "right";
  }
});

const gameLoopId = setInterval(moveSnake, 500);
function moveSnake() {
  if (snakeDirection === "up") {
    const newHeadPosition = [snake[0][0] - 1, snake[0][1]];
    if (checkNextField(newHeadPosition, gameState) === "collision") {
      clearInterval(gameLoopId);
    } else {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "g";
      snake.unshift(newHeadPosition);
      const lastTailPostion = snake.pop();
      gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
      drawGameBoard();
    }
  } else if (snakeDirection === "down") {
    const newHeadPosition = [snake[0][0] + 1, snake[0][1]];
    if (checkNextField(newHeadPosition, gameState) === "collision") {
      clearInterval(gameLoopId);
    } else {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "g";
      snake.unshift(newHeadPosition);
      const lastTailPostion = snake.pop();
      gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
      drawGameBoard();
    }
  } else if (snakeDirection === "left") {
    const newHeadPosition = [snake[0][0], snake[0][1] - 1];
    if (checkNextField(newHeadPosition, gameState) === "collision") {
      clearInterval(gameLoopId);
    } else {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "g";
      snake.unshift(newHeadPosition);
      const lastTailPostion = snake.pop();
      gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
      drawGameBoard();
    }
  } else if (snakeDirection === "right") {
    const newHeadPosition = [snake[0][0], snake[0][1] + 1];
    if (checkNextField(newHeadPosition, gameState) === "collision") {
      clearInterval(gameLoopId);
    } else {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "g";
      snake.unshift(newHeadPosition);
      const lastTailPostion = snake.pop();
      gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
      drawGameBoard();
    }
  }
}

function checkNextField(newHeadPosition, gameState) {
  const nextField = gameState[newHeadPosition[0]][newHeadPosition[1]];
  if (nextField === "w" || nextField === "g") return "collision";
}
