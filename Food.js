class Food{
    constructor(){
        this.foodStock = 15;
        this.lastFed;
        this.image = loadImage("Milk.png");
    }
    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }
    getFedTime(lastFed){
        this.lastFed = lastFed;
    }
    deductFood(){
        if(this.foodStock >0){
            this.foodStock = this.foodStock -1
        }
        return this.foodStock;
    }
    getFoodStock(){
        return this.foodStock;
    }
    display(){
        var x = 80, y = 90;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock != 0){
            for(var i=-0; i<this.foodStock; i++){
                if(i%5 == 0){
                    x = 150;
                    y = y +100;
                }
                image(this.image, x, y, 90, 90);
                x = x +50;
            }
        }
    }
}