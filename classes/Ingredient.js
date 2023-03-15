const foodArr = [
    {name: "apple", img:"src/images/apple.png"},
    {name: "burger", img:"src/images/burger.png"},
    {name: "coffee", img:"src/images/cupCoffee.png"},
    {name: "hotDog", img:"src/images/hotDog.png"},
    {name: "watermelon", img:"src/images/watermelon.png"}];

class Ingredients {
    constructor(ctx, scoreCounter){
        this.x = Math.floor(Math.random() * 500);
        this.y = 0;
        this.width = 60;
        this.height = 60;
        this.ctx = ctx;
        this.scoreCounter = scoreCounter;
        this.ingredient = null; 
        this.speed = 3;
        this.name = null;
    }

    draw(){
        const foodSelector = foodArr[Math.floor(Math.random() * 5)];
        if (!this.ingredient) {
            this.ingredient = new Image();
            this.ingredient.src = foodSelector.img;
            this.name = foodSelector.name;
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