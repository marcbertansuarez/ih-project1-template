class Game {
  constructor(context) {
    this.ctx = context;
    this.player = new Player(0, 370, 120, 120);
    this.enemies = [];
    this.superboss = new SuperBoss(1010, 230, 230, 250);
    this.attackSB = [];
    this.healthbar = new SuperBossHealth();
    this.scoreImg = score;
    this.points = 0;
    this.generateEnemiesInt = undefined;
  }

  _drawPlayer() {
    this.ctx.drawImage(
      this.player.image,
      this.player.x,
      this.player.y,
      this.player.width,
      this.player.height
    );
    
  }
  //Generete Zombie Enemies
  _generateEnemies() {
    this.generateEnemiesInt = setInterval(() => {
      const newEnemies = new Enemies(1150, 380, 100, 100);
      newEnemies._runLeft();
      this.enemies.push(newEnemies);
      if (this.points == 10) {
        clearInterval(this.generateEnemiesInt);
        soundZombie.pause();
      }
    }, Math.floor(Math.random() * 500) + 500);
    soundZombie.play();
  }

  _drawEnemies() {
    this.enemies.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
    });
  }
  //Bullets
  _drawBullets() {
    this.player.bullets.forEach((bullet) => {
      this.ctx.drawImage(
        bullet.image,
        bullet.x,
        bullet.y,
        bullet.width,
        bullet.height
      );
    });
  }

  //New generate Attack
  _generateAttackSB() {
    setInterval(() => {
      const newAttackSB = new AttackSB();
      newAttackSB._fallDown();
      this.attackSB.push(newAttackSB);
    }, 1000);
  }

  //Drawing SuperBoss Attack
  _drawAttackSB() {
    this.attackSB.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
      // this.ctx.fillStyle = "green";
      // this.ctx.fillRect(elem.x, elem.y, elem.width, elem.height);
    });
  }

  _checkCollissions() {
    //Player + Enemies Collissions
    this.enemies.forEach((enemie) => {
      if (this.player.x + this.player.width - 40 >= enemie.x) {
        this._gameOver();
      }
    });
    //Player + Superboss Collission
    if (this.player.x + this.player.width >= this.superboss.x) {
      this._gameOver();
    }
    // Player + AttackSB Collissions
    this.attackSB.forEach((attack) => {
      if (
        this.player.x >= attack.x &&
        this.player.x <= attack.x + attack.width &&
        this.player.y >= attack.y - 40 &&
        this.player.y <= attack.y - 40 + attack.height
      ) {
        this._gameOver();
      }
    });
  }

  _checkKills() {
    this.player.bullets.forEach((bullet) => {
      let indexBullet = this.player.bullets.indexOf(bullet);
      this.enemies.forEach((enemie) => {
        if (bullet.x >= enemie.x) {
          enemie.health--;
          this.player.bullets.splice(indexBullet, 1);
          if (enemie.health == 0) {
            this.points++;
            let indexEnemie = this.enemies.indexOf(enemie);
            this.enemies.splice(indexEnemie, 1);
          }
        }
      });
      if (bullet.x == 950) {
        this.player.bullets.splice(indexBullet, 1);
      }
      if (bullet.x >= this.superboss.x + 130) {
        this.superboss.health--;
        this.player.bullets.splice(indexBullet, 1);
        if (this.superboss.health == 0) {
          this._winPage();
        }
      }
    });
  }

  // SuperBoos
  _generateSuperboss() {
    this.superboss._runLeft();
    soundMonster.play();
  }

  _drawSuperboss() {
    this.ctx.drawImage(
      this.superboss.image,
      this.superboss.x,
      this.superboss.y,
      this.superboss.width,
      this.superboss.height
    );
  }

  //Generating SB Health
  _generateSBHealth() {
    this.healthbar._fallDown();
  }

  _drawSBHealth() {
    if (this.superboss.health > 45) {
      this.ctx.drawImage(
        this.healthbar.image[5],
        this.healthbar.x,
        this.healthbar.y,
        this.healthbar.width,
        this.healthbar.height
      );
    } else if (this.superboss.health > 35) {
      this.ctx.drawImage(
        this.healthbar.image[4],
        this.healthbar.x,
        this.healthbar.y,
        this.healthbar.width,
        this.healthbar.height
      );
    } else if (this.superboss.health > 25) {
      this.ctx.drawImage(
        this.healthbar.image[3],
        this.healthbar.x,
        this.healthbar.y,
        this.healthbar.width,
        this.healthbar.height
      );
    } else if (this.superboss.health > 15) {
      this.ctx.drawImage(
        this.healthbar.image[2],
        this.healthbar.x,
        this.healthbar.y,
        this.healthbar.width,
        this.healthbar.height
      );
    } else if (this.superboss.health > 10) {
      this.ctx.drawImage(
        this.healthbar.image[1],
        this.healthbar.x,
        this.healthbar.y,
        this.healthbar.width,
        this.healthbar.height
      );
    } else if (this.superboss.health > 1) {
      this.ctx.drawImage(
        this.healthbar.image[0],
        this.healthbar.x,
        this.healthbar.y,
        this.healthbar.width,
        this.healthbar.height
      );
    }
  }
  _writeScore() {
    this.ctx.drawImage(this.scoreImg, 5, 30, 200, 100);
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(`: ${this.points}`, 205, 110);
  }

  _gameOver() {
    clearInterval(this.generateEnemiesInt);
    const losePage = document.getElementById("lose-page");
    losePage.style = "display: flex";
    const canvas = document.getElementById("canvas");
    canvas.style = "display: none";
    this.player.bullets = [];
    soundZombie.pause();
    ambientSound.pause();
    soundMonster.pause();
  }

  _winPage() {
    clearInterval(this.generateEnemiesInt);
    const winPage = document.getElementById("win-page");
    winPage.style = "display: flex";
    const canvas = document.getElementById("canvas");
    canvas.style = "display:none";
    ambientSound.pause();
    soundMonster.pause();
  }

  _assignControls() {
    // Controles del teclado
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          this.player.moveLeft();
          break;
        case "ArrowRight":
          this.player.moveRight();
          break;
        case "Space":
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
    this._drawSuperboss();
    this._drawAttackSB();
    this._drawSBHealth();
    this._checkCollissions();
    this._checkKills();
    this._writeScore();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._update();
    this._generateEnemies();
    setTimeout(() => this._generateSuperboss(), 19000);
    setTimeout(() => this._generateAttackSB(), 19500);
    setTimeout(() => this._generateSBHealth(), 19000);
    this._assignControls();
    ambientSound.play();
  }
}
