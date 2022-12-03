class Player {
  constructor(x, y, width, height) {
    this.image = survivor;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.bullets = [];
    this.onCooldown = false;
  }

  moveRight() {
    this.x = this.x + 10;
  }

  moveLeft() {
    this.x = this.x - 10;
  }

  shoot() {
    const newBullets = new Bullets(this.width + this.x - 10, 455 - this.height / 2, 40, 40);
    if(this.onCooldown == false) {
      this.bullets.push(newBullets);
      newBullets._shooting();
      this.onCooldown = true;
      shootSound.play();
      setTimeout(() => {
        this.onCooldown = false;
      }, 200);
    }
  }
}
