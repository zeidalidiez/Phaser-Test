class Player extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y , key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene;
        this.velocity = 160; /// move speed

        //physics

        this.scene.physics.world.enable(this);

        // set immovable if another object collission

        this.setImmovable(false);



        this.setScale(2);
        this.setCollideWorldBounds(true);

        // add player to scene
        this.scene.add.existing(this);
        
    }
        update(cursors) {
                
            this.body.setVelocity(0);
    
            if (cursors.left.isDown) {
                this.body.setVelocityX(-this.velocity);
                console.log('left')
            } 
            if (cursors.right.isDown) {
                this.body.setVelocityX(this.velocity);
                console.log('right')
            } 
            if (cursors.up.isDown) {
                this.body.setVelocityY(-this.velocity);
                console.log('up')
            } 
            if (cursors.down.isDown) {
                this.body.setVelocityY(this.velocity);
                console.log('down')
            } 
    
    }
    
}