class SuperBoss {
    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.health = 50;
        this.runSuperbossInt = undefined
    }
    _runLeft() {
        console.log("hello");
        this.runSuperbossInt = setInterval(() => {
            //  if (this.x == 600) {
            //      clearInterval(this.runSuperbossInt);
            //  }
            this.x = this.x - 1;
        }, 2000) //I don't understand why i have to add 2000 and not 40 as the enemies.
    }
}