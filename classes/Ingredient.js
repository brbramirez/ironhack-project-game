const foodArr = ["src/images/apple.png", "src/images/burger.png", "src/images/cupCoffee.png", "src/images/hotDog.png", "src/images/watermelon.png"];

class Ingredients {
    constructor(ctx, scoreCounter){
        this.x = Math.floor(Math.random() * 500);
        this.y = 0;
        this.width = 60;
        this.height = 60;
        this.ctx = ctx;
        this.name = name;
        this.scoreCounter = scoreCounter;
        this.ingredient = null; 
        this.speed = 3;
        this.name = "coffee";
    }

    draw(){
        if (!this.ingredient) {
            this.ingredient = new Image();
            this.ingredient.src = foodArr[Math.floor(Math.random() * 5)];
        }
        this.ctx.drawImage(
            this.ingredient,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    moveIngredient() {

        if (this.scoreCounter >= 28){
            this.y += this.speed + 6.5;
        }
        else if (this.scoreCounter >= 24){
            this.y += this.speed + 6;
        }
        else if (this.scoreCounter >= 20){
            this.y += this.speed + 5;
        }
        else if (this.scoreCounter >= 16){
            this.y += this.speed + 4;
        }
        else if (this.scoreCounter >= 12){
            this.y += this.speed + 3;
        }
         else if (this.scoreCounter >= 8){
            this.y += this.speed + 2;
        }

        else if(this.scoreCounter >= 4){
           this.y += this.speed + 1;
        }
        else if(this.scoreCounter >= 0 && this.scoreCounter < 4){
           this.y += this.speed;
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

}

export default Ingredients;