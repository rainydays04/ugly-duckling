import Phaser from "phaser";

class GameScene extends Phaser.Scene {
    preload() {
       this.load.spritesheet("snail", "/assets/snail.png",{ 
            frameWidth: 650, 
            frameHeight: 650,
        });
       console.log("hi");
       //this.load.image("snail","../static/assets/test.png");
    }

    create() {
        this.snail = this.physics.add.sprite(270, 50, "snail");
    }

    update() {}
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: GameScene,
    physics: {
        default: "arcade"
    },
    backgroundColor: "#904242"
};

const game = new Phaser.Game(config);