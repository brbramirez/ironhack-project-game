class Player {
  constructor(ctx, canvas, scoreCounter) {
    this.x = 225;
    this.height = 110;
    this.y = canvas.height - this.height - 10;
    this.width = 90;
    this.ctx = ctx;
    this.speed = 10 + scoreCounter;
    this.playerChar = new Image();
    this.playerChar.src = "src/images/player.png";
    this.scoreCounter = scoreCounter;
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
    if(this.x < 480) {
      this.x += this.speed;
    }
  }
  
  moveLeft() {
    if(this.x > -3) {
      this.x -= this.speed;
    }
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(ingredient) {
    return !(this.bottom() < ingredient.top() || this.top() > ingredient.bottom() || this.right() < ingredient.left() || this.left() > ingredient.right());
  }

}

export default Player;
