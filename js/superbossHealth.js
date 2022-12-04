class SuperBossHealth {
    constructor () {
        this.image = healthBar;
        this.x = 800;
        this.y = -100;
        this.width = 180;
        this.height = 50;
        this.fallDownID = undefined;
    }

    _fallDown() {
        this.fallDownID = setInterval(() => {
            if (this.y >= 150) {
                clearInterval(this.fallDownID);
            }
          this.y = this.y + 4;
      }, 40)
    }
}