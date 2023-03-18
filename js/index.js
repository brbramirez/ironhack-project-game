//Import Classes
import Player from "../classes/Player.js";
import Ingredients from "../classes/Ingredient.js";

//START event listener
document.getElementById("start-button").addEventListener("click", () => {
  startGame();
});

//Initializing the variables
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let scoreCounter = 0;
let coffeeCounter = 0; 
const ingredients = [];
const grabbedIngredients = [];
let missedCounter = [];

//Query Selectors
const ingredientsDiv = document.querySelector("#grabbedIngredients");

//Images and audio
const myPlayer = new Player(ctx, canvas, scoreCounter);
const gameOverImg = new Image();
gameOverImg.src = "/src/images/game-over.png";
const backgroundImg = new Image();
backgroundImg.src = "src/images/Background-game-img.jpg";
const threeHeartsImg = new Image();
threeHeartsImg.src = "/src/images/3hearts.png"
const twoHeartsImg = new Image();
twoHeartsImg.src = "/src/images/2hearts.png";
const oneHeartImg = new Image();
oneHeartImg.src = "/src/images/1heart.png";
const youWinImg = new Image();
youWinImg.src = "/src/images/you-win.png";
const bell = new Audio('/src/sounds/bell-output.mp3');
const audio = new Audio('/src/sounds/335584__hmmm101__pixel-song-8.wav');

function playSound(){
    audio.play();
    audio.loop = true;
}

//Game ppal function
function startGame() {
  const gameInterval = setInterval(() => {
    playSound()
    grabFood();
    ctx.drawImage(backgroundImg, 0, 0, canvas.clientWidth, canvas.clientHeight);
    myPlayer.drawPlayer();
    ingredients.forEach((ingredient) => {
      ingredient.moveIngredient();
      ingredient.draw();
    });
    paintHearts();
    if (missedCounter.length === 3) { 
      clearInterval(gameInterval); 
      audio.pause();
      ctx.drawImage(gameOverImg, 150, 50);
    }
    if(coffeeCounter === 5) {
      clearInterval(gameInterval); 
      audio.pause();
      ctx.drawImage(youWinImg, 5, 50);
    }
    ctx.fillStyle = 'white';
    ctx.font = '25px Arial';
    ctx.fillText(`Score: ${scoreCounter}`, 10, 30);
  }, 1000 / 60);
  setInterval(() => ingredients.push(new Ingredients(ctx, scoreCounter)), 2000);
  document.getElementById("start-button").addEventListener("click", () => {
    location.reload();
  });
}

//Function to grab the food
function grabFood() {
  ingredients.some(function (ingredient) {
    const grabbed = myPlayer.crashWith(ingredient);
    if (grabbed) {
      bell.play();
      ingredient.speed = 0;
      grabbedIngredients.push(ingredient);
      ingredients.splice(ingredients.indexOf(ingredient), 1);
      scoreCounter ++;
      showGrabbedIngredients();
      if(ingredient.name === "coffee") coffeeCounter++;
      return true;
    } else if (ingredient.y >= canvas.height) {
        ingredients.splice(ingredients.indexOf(ingredient), 1);
        missedCounter.push(ingredient);
      } 
    return false;
  });
}

//Function that stores the grabbed food
function showGrabbedIngredients() {
  ingredientsDiv.innerHTML = "";
  grabbedIngredients.forEach((ingredient) => {
    const ingredientImg = new Image();
    ingredientImg.src = ingredient.ingredient.src;
    ingredientsDiv.appendChild(ingredientImg);
  });
}

//Paint Hearts
function paintHearts(){
  if(missedCounter.length === 0) ctx.drawImage(threeHeartsImg, 450, 10);
  if(missedCounter.length === 1) ctx.drawImage(twoHeartsImg, 450,10);
  if(missedCounter.length === 2) ctx.drawImage(oneHeartImg, 450,10);
}

//Controls event listener
document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft") myPlayer.moveLeft();
  else if (event.code === "ArrowRight") myPlayer.moveRight();
});





    




