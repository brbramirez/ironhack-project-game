import Player from "../classes/Player.js";

document.getElementById("start-button").addEventListener("click", () => {
  startGame();
});

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const myPlayer = new Player(ctx, canvas);

function startGame() {
  const gameInterval = setInterval(() => {
    const backgroundImg = new Image();
    backgroundImg.src = "src/images/Background-game-img.jpg";
    ctx.drawImage(backgroundImg, 0, 0, canvas.clientWidth, canvas.clientHeight);
    myPlayer.drawPlayer();
  }, 1000 / 60);
}

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft") {
    myPlayer.moveLeft();
    console.log("it should be moving");
  } else if (event.code === "ArrowRight") {
    myPlayer.moveRight();
    console.log("it should be moving");
  }
});
