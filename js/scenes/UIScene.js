class UIScene extends Phaser.Scene {
    constructor() {
        super("UI");
    }

    init() {
        // listen for emitter from gamescene
    this.gameScene = this.scene.get('Game');
    }

    create() {
        this.setupUIElements();
        this.setupEvents();

    }


    setupUIElements () {
//score/coins
this.scoreText = this.add.text(35,8, 'Coins: 0', { fontSize: "16 px", fill: "#fff" });
this.coinIcon = this.add.image(15,15, 'items', 3);
    }

    setupEvents() {
        this.gameScene.events.on('updateScore', (score) => {
        this.scoreText.setText(`Coins: ${score}`);

        })
    }
}

