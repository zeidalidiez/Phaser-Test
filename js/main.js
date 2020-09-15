
var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    scene: [
        BootScene,
        TitleScene,
        GameScene,
        UIScene,
    ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 0,
            },
        },
    },
};

var game = new Phaser.Game(config);

