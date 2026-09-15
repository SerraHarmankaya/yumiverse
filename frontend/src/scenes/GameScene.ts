import Phaser from "phaser";

export class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image(
            "bottom-bun",
            "/assets/food/bottom-bun.png"
        );

        this.load.image(
            "meat",
            "/assets/food/meat.png"
        );

        this.load.image(
            "lettuce",
            "/assets/food/lettuce.png"
        );

        this.load.image(
            "tomato",
            "/assets/food/tomato.png"
        );

        this.load.image(
            "bun",
            "/assets/food/bun.png"
        );

        this.load.image(
            "plate",
            "/assets/food/plate.png"
        );
    }

    create() {

        const burger: string[] = [];

        const order = ["bottom-bun", "meat"]

        let score = 0;

        const burgerX = 480;
        const burgerStartY = 370;
        const layerGap = 20;

        const addIngredient = (
            ingredientName: string,
            ingredientImage: Phaser.GameObjects.Image
        )=>{
            ingredientImage.setInteractive();

            ingredientImage.on("pointerdown", () => {
                ingredientImage.disableInteractive();

                const targetY = burgerStartY - (burger.length * layerGap);

                burger.push(ingredientName);

                this.tweens.add({
                    targets: ingredientImage,
                    x: burgerX,
                    y: targetY,
                    duration: 500
                });
            })
        }

        const isOrderCorrect = () => {
            if (burger.length !== order.length) {
                return false;
            }

            for (let i = 0; i < burger.length; i++) {
                if (burger[i] !== order[i]) {
                    return false;
                }
            }

            return true;
        }

        this.add.rectangle(
            780,
            100,
            280,
            140,
            0xffffff
        );

        this.add.text(
            680,
            50,
            "ORDER",
            {
                fontSize: "24px",
                color: "#000000"
            }
        );

        this.add.text(
            680,
            90,
            "Bottom Bun\nMeat",
            {
                fontSize: "20px",
                color: "#000000"
            }
        );

        const plate = this.add.image(
            480,
            380,
            "plate"
        );
        plate.setDisplaySize(250, 125);

        // Skor alanı
        const scoreText = this.add.text(
            30,
            30,
            "SCORE: 0",
            {
                fontSize: "24px",
                color: "#ffffff"
            }
        );

        const resultText = this.add.text(
            480,
            200,
            "",
            {
                fontSize: "32px",
                color: "#ffffff"
            }
        );

        resultText.setOrigin(0.5);

        const serveButton = this.add.text(
            480,
            480,
            "SERVE",
            {
                fontSize: "28px",
                color: "#ffffff",
                backgroundColor: "#4CAF50",
                padding: {
                    x: 20,
                    y: 10
                }
            }
        );

        serveButton.setOrigin(0.5);
        serveButton.setInteractive();

        serveButton.on("pointerdown", () => {

            if (isOrderCorrect()) {

                score += 100;
                scoreText.setText(`SCORE: ${score}`);

                resultText.setText("PERFECT! +100");

            } else {
                score -= 25;
                scoreText.setText(`SCORE: ${score}`);

                resultText.setText("WRONG! -25");
            }
        })

        // Butom bun
        const bottomBun = this.add.image(
            150,
            150,
            "bottom-bun"
        );
        bottomBun.setScale(0.1);

        // Meat
        const meat = this.add.image(
            150,
            300,
            "meat"
        );
        meat.setScale(0.1);

        // Lettuce
        const lettuce = this.add.image(
            150,
            450,
            "lettuce"
        );
        lettuce.setScale(0.07);

        // Tomato
        const tomato = this.add.image(
            150,
            600,
            "tomato"
        );
        tomato.setScale(0.1);

        // Bun
        const bun = this.add.image(
            150,
            750,
            "bun"
        );
        bun.setScale(0.1);

        // Malzemeleri aktif et
        addIngredient("bottom-bun", bottomBun);
        addIngredient("meat", meat);
        addIngredient("lettuce", lettuce);
        addIngredient("tomato", tomato);
        addIngredient("bun", bun);
    }
}
