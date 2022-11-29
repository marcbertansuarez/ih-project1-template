class Bullets {
    constructor(x, y, width, height) {
        this.image = bullet;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.shootingInterval = undefined;
    }

     _shooting() {
         this.shootingInterval = setInterval(() => {
            if (this.x > 1000) {
                 clearInterval(this.shootingInterval);
             }
             this.x = this.x + 5;
         }, 20);
     }

}