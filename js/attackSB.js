class AttackSB {
    constructor () {
        this.x = Math.floor(Math.random() * 850);
        this.y = -100;
        this.width = 50;
        this.height = 50;
        this.falldownID = undefined;
    }

    _fallDown() {
        this.falldownID = setInterval(() => {
            if (this.x > 630) {
                clearInterval(this.falldownID);
            }
            this.y = this.y + 10;
        }, 40) 
    }
}