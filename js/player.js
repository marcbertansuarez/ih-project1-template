class Player {
  constructor(x, y, width, height) {
    this.image = survivor;
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

  shoot() {
    const newBullets = new Bullets(this.width + this.x - 10, 455 - this.height / 2, 40, 40);
    if(newBullets.shootingDelay == false && this.bullets.length < 3) {
      this.bullets.push(newBullets);
      newBullets._shooting();
      newBullets.shootingDelay = true;
      setTimeout(() => {
        newBullets.shootingDelay = false;
      }, 800);
    }
  }
}

//_assignPImage()
