class Player { 
    constructor(ctx){
        this.x = 438;
        this.y = 350;
        this.width = 90;
        this.height = 110;
        this.ctx = ctx;
    }

    drawPlayer(){
        const playerChar = new Image();
        playerChar.src = "src/images/player.png";
        this.ctx.drawImage(playerChar, this.x, this.y, this.width, this.height);
        }

    moveRight(){
        this.x += 10;
    }
    moveLeft(){
        this.x -= 10;
    }
    
}

export default Player