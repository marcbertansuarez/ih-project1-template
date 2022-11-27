class Enemies {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.runEnemieInterval = undefined;
    }

    _runLeft() {
        this.runEnemieInterval = setInterval(() => {
            if (this.x < 0) {
                clearInterval(this.runEnemieInterval);
            }
            this.x = this.x - 5;
        }, 20) 
    }

    //_assignEImage()
}