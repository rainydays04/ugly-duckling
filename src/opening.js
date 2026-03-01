import Phaser from "phaser";

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
    }

    create() {
        this.cameras.main.setBackgroundColor("#904242");
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

