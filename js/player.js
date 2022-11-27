class Player {
    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bullets = [];
    }

    moveRight() {
        this.x = this.x + 10;
    }

    moveLeft() {
        this.x = this.x - 10;
    }

    shoot(){
           
    }

}
       



    //_assignPImage()
