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
    const newBullets = new Bullets(this.width + this.x - 10, 475 - this.height / 2, 5, 5);
    newBullets._shooting();
    this.bullets.push(newBullets);
  }
}

//_assignPImage()
