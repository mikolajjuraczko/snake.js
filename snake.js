import defaultGameState from "./modules/default-game-state.js";
import * as snakeFunctions from "./modules/snake-functions.js";

const gameBoard = document.querySelectorAll(".field");
const gameState = JSON.parse(JSON.stringify(defaultGameState));

snakeFunctions.createAnApple(gameState);
snakeFunctions.drawGameBoard(gameState, gameBoard);
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
  } else if (e.key === "Enter") {
    console.log("melm");
  }
});

const gameLoopId = setInterval(gameLoop, 200);
function gameLoop() {
  if (snakeDirection === "up") {
    const newHeadPosition = [snake[0][0] - 1, snake[0][1]];
    if (
      snakeFunctions.checkNextField(newHeadPosition, gameState) === "collision"
    ) {
      clearInterval(gameLoopId);
    } else if (
      snakeFunctions.checkNextField(newHeadPosition, gameState) === "apple"
    ) {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "s";
      snake.unshift(newHeadPosition);
      snakeFunctions.createAnApple(gameState);
      snakeFunctions.drawGameBoard(gameState, gameBoard);
    } else {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "s";
      snake.unshift(newHeadPosition);
      const lastTailPostion = snake.pop();
      gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
      snakeFunctions.drawGameBoard(gameState, gameBoard);
    }
  } else if (snakeDirection === "down") {
    const newHeadPosition = [snake[0][0] + 1, snake[0][1]];
    if (
      snakeFunctions.checkNextField(newHeadPosition, gameState) === "collision"
    ) {
      clearInterval(gameLoopId);
    } else if (
      snakeFunctions.checkNextField(newHeadPosition, gameState) === "apple"
    ) {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "s";
      snake.unshift(newHeadPosition);
      snakeFunctions.createAnApple(gameState);
      snakeFunctions.drawGameBoard(gameState, gameBoard);
    } else {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "s";
      snake.unshift(newHeadPosition);
      const lastTailPostion = snake.pop();
      gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
      snakeFunctions.drawGameBoard(gameState, gameBoard);
    }
  } else if (snakeDirection === "left") {
    const newHeadPosition = [snake[0][0], snake[0][1] - 1];
    if (
      snakeFunctions.checkNextField(newHeadPosition, gameState) === "collision"
    ) {
      clearInterval(gameLoopId);
    } else if (
      snakeFunctions.checkNextField(newHeadPosition, gameState) === "apple"
    ) {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "s";
      snake.unshift(newHeadPosition);
      snakeFunctions.createAnApple(gameState);
      snakeFunctions.drawGameBoard(gameState, gameBoard);
    } else {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "s";
      snake.unshift(newHeadPosition);
      const lastTailPostion = snake.pop();
      gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
      snakeFunctions.drawGameBoard(gameState, gameBoard);
    }
  } else if (snakeDirection === "right") {
    const newHeadPosition = [snake[0][0], snake[0][1] + 1];
    if (
      snakeFunctions.checkNextField(newHeadPosition, gameState) === "collision"
    ) {
      clearInterval(gameLoopId);
    } else if (
      snakeFunctions.checkNextField(newHeadPosition, gameState) === "apple"
    ) {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "s";
      snake.unshift(newHeadPosition);
      snakeFunctions.createAnApple(gameState);
      snakeFunctions.drawGameBoard(gameState, gameBoard);
    } else {
      gameState[newHeadPosition[0]][newHeadPosition[1]] = "s";
      snake.unshift(newHeadPosition);
      const lastTailPostion = snake.pop();
      gameState[lastTailPostion[0]][lastTailPostion[1]] = "o";
      snakeFunctions.drawGameBoard(gameState, gameBoard);
    }
  }
}

function snakeGame() {}
