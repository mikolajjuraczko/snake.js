function checkNextField(newHeadPosition, gameState) {
  const nextField = gameState[newHeadPosition[0]][newHeadPosition[1]];
  if (nextField === "w" || nextField === "s") {
    return "collision";
  } else if (nextField === "a") {
    return "apple";
  }
}

function createAnApple(gameState) {
  while (true) {
    const y = Math.floor(Math.random() * 15) + 1;
    const x = Math.floor(Math.random() * 20) + 1;
    const randomField = gameState[y][x];
    if (randomField === "o") {
      gameState[y][x] = "a";
      break;
    }
  }
}

export { checkNextField, createAnApple };
