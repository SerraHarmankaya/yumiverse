import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,

    width: 1280,
    height: 720,

    backgroundColor: "#87CEEB",

    scene: {
        create() {
            this.add.text(
                640,
                360,
                "Yumiverse 🍔",
                {
                    fontSize: "64px",
                    color: "#ffffff"
                }
            ).setOrigin(0.5);
        }
    }
};

new Phaser.Game(config);