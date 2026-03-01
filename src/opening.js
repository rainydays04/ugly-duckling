import Phaser from "phaser";

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
    }

    create() {
        this.cameras.main.setBackgroundColor("#904242");
        this.load.spritesheet("sail", "assets/snailrunning.png",{
            frameWidth: 50,
			frameHeight: 50,
        });
    }

    update() {
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game",
    scene: [GameScene]
};

new Phaser.Game(config);

