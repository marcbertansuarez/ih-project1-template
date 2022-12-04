// Player
const survivor = new Image();
survivor.src = "../img/playergirl.png";

const zombie1 = new Image();
zombie1.src = "../img/Zombie1.png";

const zombie2 = new Image();
zombie2.src = "../img/zombie2.gif"

const zombie3 = new Image();
zombie3.src = "../img/zombie3.png"

const bullet = new Image();
bullet.src = "../img/bullet.png";

const zombieArr = [zombie1, zombie2, zombie3];

const bigZombie = new Image();
bigZombie.src = "../img/zombieboss.png";

const zombieSkull = new Image();
zombieSkull.src = "../img/toppng.com-skull-pixel-art-minecraft-skull-pixel-art-small-590x760.png";

const health1 = new Image();
health1.src = "../img/health1.png";

const health2 = new Image();
health2.src = "../img/health2.png";

const health3 = new Image();
health3.src = "../img/health3.png";

const health4 = new Image();
health4.src = "../img/health4.png";

const health5 = new Image();
health5.src = "../img/health5.png";

const health6 = new Image();
health6.src = "../img/health6.png";

const healthBar = [health1, health2, health3, health4, health5, health6];

const score = new Image();
score.src = "../img/score.png";

const shootSound = new Audio("../sounds/singleshot2.mp3");
shootSound.volume = 0.2;

const soundZombie = new Audio("../sounds/soundzombies.mp3");
soundZombie.volume = 0.06;
soundZombie.loop = true;

const ambientSound = new Audio("../sounds/ambientsound.wav")
ambientSound.volume = 0.04;

const soundMonster = new Audio("../sounds/Zombie Monster - QuickSounds.com.mp3");
soundMonster.volume = 0.06;
soundMonster.loop = true;