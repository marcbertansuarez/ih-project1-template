class Player {
    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    moveRight() {
        this.x = this.x + 10;
    }

    moveLeft() {
        this.x = this.x - 10;
    }

    shoot()
}