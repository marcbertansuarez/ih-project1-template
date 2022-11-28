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
        setInterval(() => {
            const newBullets = new Bullets(this.player.width + this.player.x, 600 - (this.player.height/2), 5, 5);
            newBullets._shooting();
            this.bullets.push(newBullets);
          }, 100);   
          console.log(this.bullets);
    }

}
       



    //_assignPImage()
