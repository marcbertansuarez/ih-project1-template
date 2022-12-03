class Game{
  constructor(context) {
    this.ctx = context;
    this.player = new Player(0, 370, 120, 120);
    this.enemies = [];
    this.superboss = new SuperBoss(1150, 380, 100, 100);
    this.attackSB = [];
    this.points = 0;
    this.generateEnemiesInt = undefined
  }

   _drawPlayer() {
    this.ctx.drawImage(this.player.image, this.player.x, this.player.y, this.player.width, this.player.height);
    //  this.ctx.fillStyle = "green";
    //  this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
   }

   _generateEnemies() {
     this.generateEnemiesInt = setInterval(() => {
       const newEnemies = new Enemies(1150, 380, 100, 100);
       newEnemies._runLeft();
       this.enemies.push(newEnemies)
       if (this.points == 2) {
        clearInterval(this.generateEnemiesInt);
       } 
     }, Math.floor(Math.random() * 500) + 500);
     soundZombie.play();
   }

  _drawEnemies() {
    this.enemies.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
      // this.ctx.fillStyle = "red";
      // this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height);
    })
  }
     _drawBullets(){
       this.player.bullets.forEach((bullet) => {
        this.ctx.drawImage(bullet.image, bullet.x, bullet.y, bullet.width, bullet.height);
        //  this.ctx.fillStyle = "black";
        //  this.ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
       })
    }

   _checkCollissions() {
    this.enemies.forEach((enemie) => {
      if (this.player.x + this.player.width - 40 >= enemie.x ) {
        this._gameOver();
      }
    })
    //collissions player + superboss
    if (this.player.x + this.player.width >= this.superboss.x) {
      this._gameOver();
    }
    // To Do player + attackSB collissions
   }
   
    _checkKills() {
      this.player.bullets.forEach((bullet) => {
        let indexBullet = this.player.bullets.indexOf(bullet);
        this.enemies.forEach((enemie) => {
        if (bullet.x >= enemie.x) {
          enemie.health--;
          this.player.bullets.splice(indexBullet, 1);
          if(enemie.health == 0) {
          this.points++;
          let indexEnemie = this.enemies.indexOf(enemie);
          this.player.bullets.splice(indexBullet, 1);
          this.enemies.splice(indexEnemie, 1);
          }
          //Same problem. Loop.
          if(this.points >= 2) {
            this._generateSuperboss();
            this._generateAttackSB();
          }
          
          
          // if (this.points == 30) {
          //   this._winPage(); => winpage to decide when it's happening
          // }
        } 
      });
      if(bullet.x == 950) {
        this.player.bullets.splice(indexBullet, 1);
      }
    });
  }

  _generateSuperboss() {
        this.superboss._runLeft(); 
    }

  _drawSuperboss(){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.superboss.x, this.superboss.y, this.superboss.width, this.superboss.height);
  } 
//New generate Attack
  _generateAttackSB() {
    setInterval(() => {
      const newAttackSB = new AttackSB();
      newAttackSB._fallDown();
      this.attackSB.push(newAttackSB);
    }, 500);
  }
//Drawing SuperBoss Attack
  _drawAttackSB() {
    this.attackSB.forEach((elem) => {
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height);
    })        
  }
  //Generating SB Health
  _generateSBHealth() {
  }
   _writeScore() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(`Score: ${this.points}`, 10, 50);
   }

   _gameOver() {
    clearInterval(this.generateEnemiesInt);
    const losePage = document.getElementById('lose-page');
    losePage.style = "display: flex";
    const canvas = document.getElementById('canvas');
    canvas.style = "display: none";
    soundZombie.pause();
    ambientSound.pause();
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
    this._drawSuperboss(); //new ()
    this._drawAttackSB(); //new ()
    this._checkCollissions();
    this._checkKills();
    this._writeScore();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this._generateEnemies();
    this._assignControls();
    ambientSound.play();
  }
}