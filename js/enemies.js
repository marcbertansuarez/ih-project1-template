class Enemies {
    constructor(x, y, width, height) {
        this.image = zombieArr[Math.floor(Math.random() * zombieArr.length)];
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.health = 3;
        this.runEnemieInterval = undefined;
    }

    _runLeft() {
        this.runEnemieInterval = setInterval(() => {
            if (this.x + this.width < 0) {
                clearInterval(this.runEnemieInterval);
            }
            this.x = this.x - (Math.floor(Math.random() * 12));
        }, 40) 
    }

    //_assignEImage()
}