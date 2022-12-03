class SuperBoss {
    constructor (x, y, width, height) {
        this.image = bigZombie;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.health = 50;
        this.runSuperbossInt = undefined
        // this.healthImg = [0,1,2,3];
        // //health img
        // this.healthImgID = undefined;
        //health img ID
    }
    _runLeft() {
        this.runSuperbossInt = setInterval(() => {
              if (this.x == 800) {
                  clearInterval(this.runSuperbossInt);
              }
            this.x = this.x - 10;
        }, 40)
    }

    // _showHealth() {
    //     this.healthImgID = setInterval(() => {
    //         if ()
    //     }, 40);
    // }
}