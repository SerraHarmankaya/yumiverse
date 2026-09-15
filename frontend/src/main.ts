import Phaser from "phaser";
import { GameScene } from "./scenes/GameScene";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,

    width: 960,
    height: 540,

    backgroundColor: "#1d2638",

    pixelArt: true,

    scene: GameScene,
};

new Phaser.Game(config);