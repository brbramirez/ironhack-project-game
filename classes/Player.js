class Player {
  constructor(ctx, canvas) {
    this.x = 438;
    this.height = 110;
    this.y = canvas.height - this.height;
    this.width = 90;
    this.ctx = ctx;
    this.playerChar = new Image();
    this.playerChar.src = "src/images/player.png";
  }

  drawPlayer() {
    this.ctx.drawImage(
      this.playerChar,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  moveRight() {
    this.x += 10;
  }
  moveLeft() {
    this.x -= 10;
  }
}

export default Player;
