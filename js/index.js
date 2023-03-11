import Player from "../classes/Player.js";
import Ingredients from "../classes/Ingredient.js";

document.getElementById("start-button").addEventListener("click", () => {
  startGame();
});

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const myPlayer = new Player(ctx, canvas);
const ingredients = [];
const grabbedIngredients = [];
const ingredientsDiv = document.querySelector("#grabbedIngredients");
let scoreCounter = 0;

let missedCounter = [];

setInterval(() => ingredients.push(new Ingredients(ctx, scoreCounter)), 2000);

const gameOverImg = new Image();
gameOverImg.src = "/src/images/game-over.png";

const audio = new Audio('/src/sounds/335584__hmmm101__pixel-song-8.wav');
function playSound(){
    audio.play();
}

function startGame() {
  const gameInterval = setInterval(() => {
    playSound()
    grabFood();
    const backgroundImg = new Image();
    backgroundImg.src = "src/images/Background-game-img.jpg";
    ctx.drawImage(backgroundImg, 0, 0, canvas.clientWidth, canvas.clientHeight);
    myPlayer.drawPlayer();
    ingredients.forEach((ingredient) => {
      ingredient.moveIngredient();
      ingredient.draw();
      if (missedCounter.length === 3) { 
          clearInterval(gameInterval); 
          audio.pause();
          ctx.drawImage(gameOverImg, 150, 50);
        }
    });
    ctx.fillStyle = 'white';
    ctx.font = '25px Arial';
    ctx.fillText(`Score: ${scoreCounter}`, 10, 30);
  }, 1000 / 60);
}

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft") {
    myPlayer.moveLeft();
  } else if (event.code === "ArrowRight") {
    myPlayer.moveRight();
  }
});

function grabFood() {
  ingredients.some(function (ingredient) {
    const grabbed = myPlayer.crashWith(ingredient);
    if (grabbed) {
      ingredient.isGrabbed = true;
      ingredient.speed = 0;
      grabbedIngredients.push(ingredient);
      ingredients.splice(ingredients.indexOf(ingredient), 1);
      scoreCounter ++;
      showGrabbedIngredients();
      return true;
    } else if (ingredient.y >= canvas.height) {
      ingredients.splice(ingredients.indexOf(ingredient), 1);
      missedCounter.push(ingredient);
    }
    return false;
  });
}

function showGrabbedIngredients() {
  ingredientsDiv.innerHTML = "";
  grabbedIngredients.forEach((ingredient) => {
    const ingredientImg = new Image();
    ingredientImg.src = ingredient.ingredient.src;
    ingredientsDiv.appendChild(ingredientImg);
  });
}



