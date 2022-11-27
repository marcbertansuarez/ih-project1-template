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
            if (this.x + this.width < 0) {
                clearInterval(this.runEnemieInterval);
            }
            this.x = this.x - 3;
        }, 20) 
    }

    //_assignEImage()
}