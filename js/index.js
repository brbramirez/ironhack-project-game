import Player from "../classes/Player.js";
import Ingredients from "../classes/Ingredient.js"; 

document.getElementById("start-button").addEventListener("click", () => {
  startGame();
});

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const myPlayer = new Player(ctx, canvas);
const ingredients = [];
setInterval(() => ingredients.push(new Ingredients(ctx)),2000);
const grabbedIngredients = [];


function startGame() {
  const gameInterval = setInterval(() => {
    grabFood();
    const backgroundImg = new Image();
    backgroundImg.src = "src/images/Background-game-img.jpg";
    ctx.drawImage(backgroundImg, 0, 0, canvas.clientWidth, canvas.clientHeight);
    myPlayer.drawPlayer();
    ingredients.forEach((ingredient) => {
    ingredient.moveIngredient()
    ingredient.draw()
    });
  }, 1000 / 60);
}

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft") {
    myPlayer.moveLeft();
  } else if (event.code === "ArrowRight") {
    myPlayer.moveRight();
  }});

  function grabFood() {
    ingredients.some(function(ingredient) {
      const grabbed = myPlayer.crashWith(ingredient);
      if (grabbed) {
        ingredient.isGrabbed = true;
        ingredient.speed = 0;
        grabbedIngredients.push(ingredient);
        console.log("you grabbed something!");
        console.log(grabbedIngredients);
        return true;
      }
      return false;
    });
  }

  //function grabFood(){
  //  const grabbed = ingredients.some(function(ingredient){
  //    return myPlayer.crashWith(ingredient);
  //  });
  //  if (grabbed) {
  //    grabbedIngredients.push(ingredient);
  //    console.log("you grabbed something!");
  //    console.log(grabbedIngredients);
  //  }
  //}


