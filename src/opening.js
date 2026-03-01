import Phaser from "phaser"
class GameScene extends Phaser.Scene {
    constructor() {
		super("GameScene")
	}
    preload(){
        this.preload.spritesheet("goose","name for goose file"{
            //height and size stuff
        });
    }
}