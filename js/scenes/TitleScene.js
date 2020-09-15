class TitleScene extends Phaser.Scene {
    constructor() {
        super("Title");
    }

    create() {
        // title text
        this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, "Online RPG Test", { fontSize: '92px', fill: '#fff'});
        this.titleText.setOrigin(0.5);

        //create play game button
        this.startGameButton = new UIButton(this, this.scale.width / 2, this.scale.height * .65, 'button1', 'button2', 'Start', this.startScene.bind(this, 'Game'));
    }


    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}

