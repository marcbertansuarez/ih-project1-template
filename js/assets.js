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

const shootSound = new Audio("../sounds/singleshot2.mp3");
shootSound.volume = 0.2;

const soundZombie = new Audio("../sounds/soundzombies.mp3");
soundZombie.volume = 0.06;
soundZombie.loop = true;

const ambientSound = new Audio("../sounds/ambientsound.wav")
ambientSound.volume = 0.04;