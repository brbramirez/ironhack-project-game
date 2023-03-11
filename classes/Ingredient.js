const foodArr = ["src/images/apple.png", "src/images/burger.png", "src/images/cupTea.png", "src/images/hotDog.png", "src/images/watermelon.png"];

class Ingredients {
    constructor(ctx){
        this.x = Math.floor(Math.random() * 550 - 70);
        this.y = 0;
        this.width = 60;
        this.height = 60;
        this.ctx = ctx;
        this.ingredient = null; 
        this.speed = 3;
        this.isGrabbed = false;
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
        if (!this.isGrabbed) {
          this.y += this.speed;
    }
}
    //moveIngredient(){
    //    this.y += 5;
    //}
    
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