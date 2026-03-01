import Phaser from "phaser";

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.spritesheet('player','assets/Flyingduck.png',{
        frameWidth: 64,// Width of one frame
        frameHeight: 64, // Height of one frame
});
    }

    create() {
        this.cameras.main.setBackgroundColor("#904242");

        let frames = [];

        for (let i = 0; i < 6; i++) {  // change 6 to however many rows you have
            frames.push(i * 2);
        }

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { frames: frames }),
            frameRate: 10,
            repeat: -1
        });

        const player = this.add.sprite(100, 100, 'player');
        player.play('walk');
    }

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game",
    scene: [GameScene]
};

new Phaser.Game(config);
