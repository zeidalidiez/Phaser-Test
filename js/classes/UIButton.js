class UIButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, hoverKey, text, targetCallback) {
        super(scene, x, y);
        this.scene = scene; // scene for container to be added to 
        this.x = x; // x pos of container
        this.y = y; // y pos of container
        this.key = key; //background image
        this.hoverKey = hoverKey; // image to be displayed on hover
        this.text = text; // text displayed on bottom
        this.targetCallback = targetCallback; // callback function for when player clicks the button
        this.scene.add.existing(this); // add this container to our phaser scene
        this.createButton(); // create UI button


    }

    createButton() {
        this.button = this.scene.add.image(0 ,0, 'button2');
        this.button.setScale(1.4);

        //listening for events on button with on event
        this.button.setInteractive();        
        this.buttonText = this.scene.add.text(0,0, this.text, {fontSize: '26px', fill: '#fff'});
        Phaser.Display.Align.In.Center(this.buttonText, this.button);


        this.add(this.button);
        this.add(this.buttonText);


        // listening for ev
        this.button.on('pointerdown', () => {
         this.targetCallback();

        })
        this.button.on('pointerover', () => {
            console.log('P Over')
            this.button.setTexture(this.hoverKey);
        })
        this.button.on('pointerout', () => {
            console.log('P out')
            this.button.setTexture(this.key);
        })
        
    }
}


