class Game{
  constructor(context) {
    this.ctx = context;
    this.player = new Player(0, 550, 50, 50);
    this.enemies = [];
    this.points = 0;
  }

  _drawPlayer() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  }

  _generateEnemies() {
    setInterval(() => {
      const newEnemies = new Enemies(950, 550, 50, 50);
      this.enemies.push(newEnemies)
    }, 1000); 
  }

  _drawEnemies() {
    this.enemies.forEach((elem) => {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height);
    })
  }

  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.meatball.moveLeft();
          break;
        case 'ArrowRight':
          this.meatball.moveRight();
          break;
        default:
          break;
      }
    });
  }

  _update() {
    this._drawPlayer();
    this._drawEnemies();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this._generateEnemies();
    this._assignControls();
    
  }
}