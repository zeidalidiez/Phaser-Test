class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot");
    }

    preload() {

        //images preload
        this.loadImages();
        
        //sprite preload
        this.loadSprites();
        
        
        // audio preload
        this.loadAudio();
    }

    loadImages () {
        this.load.image('button1', 'images/ui/blue_button01.png');
        this.load.image('button2', 'images/ui/blue_button02.png');
    }

    loadSprites () {
        this.load.spritesheet('items', 'images/items.png', {frameWidth:32, frameHeight:32,});
        this.load.spritesheet('food', 'images/food.png', {frameWidth:16, frameHeight:16,});
    }

    loadAudio () {
        this.load.audio('goldSound', ['audio/Pickup.wav']);
    }

    create() {
        console.log('Starting Game')
        this.scene.start('Title');
    }
    
}

