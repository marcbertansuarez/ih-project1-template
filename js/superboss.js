class SuperBoss {
    constructor (x, y, width, height) {
        this.image = bigZombie;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.health = 50;
        this.runSuperbossInt = undefined
    }
    _runLeft() {
        this.runSuperbossInt = setInterval(() => {
              if (this.x == 750) {
                  clearInterval(this.runSuperbossInt);
              }
            this.x = this.x - 4;
        }, 40)
    }
}