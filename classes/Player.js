class Player {
  constructor(ctx, canvas) {
    this.x = 225;
    this.height = 110;
    this.y = canvas.height - this.height - 10;
    this.width = 90;
    this.ctx = ctx;
    this.speed = 10;
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
