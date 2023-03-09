import Player from "/js/Player";

window.onload = () => {

    document.getElementById('start-button').onclick = () => {
      startGame();
    };

    function startGame() {

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    const backgroundImg = new Image();
    backgroundImg.src = "src/images/Background-game-img.jpg";
    ctx.drawImage(backgroundImg, 0, 0, 370, 450);

    const myPlayer = new Player(ctx);
    myPlayer.drawPlayer();

    backgroundImg.onload = function(){
      ctx.drawImage(backgroundImg, 0, 0);
      myPlayer.drawPlayer();
    }

    document.addEventListener("keydown", function(event){
      if(event.code === 'ArrowLeft'){
        myPlayer.moveLeft();
        console.log("it should be moving")
      } else if (event.code === 'ArrowRight') {
        myPlayer.moveRight();
        console.log("it should be moving")
      }})


    
    

    }
}