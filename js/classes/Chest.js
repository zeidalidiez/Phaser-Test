class Chest extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y , key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene; // scene this game object will be added to
        this.coins = 10; // amount of coins this chest currently holds
        
        //physics

        this.scene.physics.world.enable(this);

        // add player to scene
        this.scene.add.existing(this);
        
    }
    makeActive() {
        this.setActive(true);
        this.setVisible(true);
        this.body.checkCollision.none = false;
    }

    makeInactive() {
        this.setActive(false);
        this.setVisible(false);
        this.body.checkCollision.none = true;
    }
}