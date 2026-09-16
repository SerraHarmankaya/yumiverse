import Phaser from "phaser";

type Ingredient =
    | "bottom-bun"
    | "meat"
    | "lettuce"
    | "top-bun";

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
            "top-bun",
            "/assets/food/top-bun.png"
        );

        this.load.image(
            "plate",
            "/assets/food/plate.png"
        );
    }

    create() {

        const burger: Ingredient[] = [];

        const burgerImages: Phaser.GameObjects.Image[] = [];
        const orderImages: Phaser.GameObjects.Image[] = [];

        let order: Ingredient[] = [];

        let score = 0;

        const burgerX = 480;
        const burgerStartY = 370;
        const layerGap = 20;

        const addIngredient = (
            ingredientName: Ingredient,
            ingredientImage: Phaser.GameObjects.Image
        )=>{
            ingredientImage.setInteractive();

            ingredientImage.on("pointerdown", () => {

                const targetY = burgerStartY - (burger.length * layerGap);

                // Tıklanan malzemenin bir kopyasını oluştur
                const ingredientCopy = this.add.image(
                    ingredientImage.x,
                    ingredientImage.y,
                    ingredientName
                );
                ingredientCopy.setScale(ingredientImage.scaleX, ingredientImage.scaleY);

                burger.push(ingredientName);
                burgerImages.push(ingredientCopy);

                this.tweens.add({
                    targets: ingredientImage,
                    x: burgerX,
                    y: targetY,
                    duration: 500
                });
            })
        }

        const resetBurger = () => {

            burgerImages.forEach((image) => {
                image.destroy();
            });

            burger.length = 0;
            burgerImages.length = 0;
        };

        this.add.rectangle(
            780,
            100,
            280,
            140,
            0xffffff
        );

        const generateOrder = () => {
            // Clean up previous order images
            orderImages.forEach((image) => {
                image.destroy();
            });

            orderImages.length = 0;
            order = ["bottom-bun"];

            const ingredients: Ingredient[] = ["meat", "lettuce"];

            const ingredientCount = Phaser.Math.Between(1, 3);

            for (let i = 0; i < ingredientCount; i++) {

                const randomIngredient = Phaser.Utils.Array.GetRandom(ingredients)

                order.push(randomIngredient)
            }

            order.push("top-bun");

            order.forEach((ingredient, index) => {
                const image = this.add.image(
                    780,
                    190 - (index * 20),
                    ingredient
                );
                if (ingredient === "lettuce") {
                    image.setScale(0.07);
                } else {
                    image.setScale(0.1);
                }
                orderImages.push(image);
            })
        }

        generateOrder();

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

        this.add.text(
            680,
            50,
            "ORDER",
            {
                fontSize: "24px",
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

            resetBurger();

            generateOrder();
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
            250,
            "meat"
        );
        meat.setScale(0.1);

        // Lettuce
        const lettuce = this.add.image(
            150,
            350,
            "lettuce"
        );
        lettuce.setScale(0.07);

        // Bun
        const topBun = this.add.image(
            150,
            450,
            "top-bun"
        );
        topBun.setScale(0.1);

        // Malzemeleri aktif et
        addIngredient("bottom-bun", bottomBun);
        addIngredient("meat", meat);
        addIngredient("lettuce", lettuce);
        addIngredient("top-bun", topBun);
    }
}
