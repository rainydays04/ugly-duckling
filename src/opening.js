import Phaser from "phaser";

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
       // this.load.spritesheet("snail", "/assets/snail.png",{ frameWidth: 65, frameHeight: 65, });
       console.log("hi");
       this.load.image("snail","assets/test.png");
    }

    create() {
        this.cameras.main.setBackgroundColor("#904242");

        // Correct method:
        this.snail = this.physics.add.sprite(270, 50, "snail");
    }

    update() {}
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game",
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [GameScene]
};

new Phaser.Game(config);