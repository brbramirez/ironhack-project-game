import Player from "./Player.js";

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };


    function startGame() {
  
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    const myPlayer = new Player(ctx);
    myPlayer.drawPlayer();

    }
}