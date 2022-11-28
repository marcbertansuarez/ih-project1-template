class Game{
  constructor(context) {
    this.ctx = context;
    this.player = new Player(0, 550, 50, 50);
    this.enemies = [];
    this.points = 0;
    this.generateEnemiesInt = undefined
  }

  _drawPlayer() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  }

  _generateEnemies() {
    this.generateEnemiesInt = setInterval(() => {
      const newEnemies = new Enemies(1030, 550, 50, 50);
      newEnemies._runLeft();
      this.enemies.push(newEnemies)
    }, 1000); 
  }

  _drawEnemies() {
    this.enemies.forEach((elem) => {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height);
    })
  }
     _drawBullets(){
       this.player.bullets.forEach((bullet) => {
         this.ctx.fillStyle = "black";
         this.ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
       })
    }

   _checkCollissions() {
    this.enemies.forEach((enemie) => {
      if (this.player.x + this.player.width >= enemie.x ) {
        this._gameOver();
      }
    })
   }

    _checkKills() {
      this.player.bullets.forEach((bullet) => {
        this.enemies.forEach((enemie) => {
        if (bullet.x >= enemie.x) {
          this.points++;
          let indexBullet = this.player.bullets.indexOf(bullet);
          let indexEnemie = this.enemies.indexOf(enemie);
          this.player.bullets.splice(indexBullet, 1);
          this.enemies.splice(indexEnemie, 1);
          if (this.points == 20) {
            this._winPage();
          }
        }
      });
    });
  }

   _writeScore() {
    this.ctx.fillStyle = "black";
    this.ctx.font = "20px Arial";
    this.ctx.fillText(`Score: ${this.points}`, 50, 100);
   }

   _gameOver() {
    clearInterval(this.generateEnemiesInt);
    const losePage = document.getElementById('lose-page');
    losePage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
   }

   _winPage() {
    clearInterval(this.generateEnemiesInt);
    const winPage = document.getElementById('win-page');
    winPage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display:none";
   }

  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.player.moveLeft();
          break;
        case 'ArrowRight':
          this.player.moveRight();
          break;
        case 'Space':
          this.player.shoot();
          break;
        default:
          break;
      }
    });
  }

  _clean() {
     this.ctx.clearRect(0, 0, 1000, 600);
   }

  _update() {
    this._clean();
    this._drawPlayer();
    this._drawEnemies();
    this._drawBullets();
    this._checkCollissions();
    this._checkKills();
    this._writeScore();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this._generateEnemies();
    this._assignControls();
    
  }
}