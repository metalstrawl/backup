//create a scene
let gameScene = new Phaser.Scene('Game');

gameScene.init = function(){
    //speed for player
    this.playerSpeed = 2.5;

    this.enemyMinSpeed = 3;
    this.enemyMaxSpeed = 7;

    this.enemyMinY = 80;
    this.enemyMaxY = 280;

    this.isTerminating = false;
    this.isResetting = false;
};

gameScene.preload = function(){
    //load images
    this.load.image('background','assets/background.png');
    this.load.image('player','assets/player.png');
    this.load.image('enemy','assets/dragon.png');
    this.load.image('goal','assets/treasure.png');
};

//called once preload is over
gameScene.create = function(){
    let bg = this.add.sprite(0,0,'background');
    //set origin point
    bg.setOrigin(0,0);
    this.player = this.add.sprite (50,180,'player')
    this.goal = this.add.sprite (580,180,'goal')

    this.player.scaleX = 0.3
    this.player.scaleY = 0.3

    this.goal.scaleX = 0.5
    this.goal.scaleY = 0.5

//creating enemy group
    this.enemies = this.add.group({
        key: 'enemy',
        repeat: 4,
        setXY: {
            x: 120,
            y: 100,
            stepX: 95,
            stepY: 20,
        }
    });


    Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.5, -0.5);

    //random enemy speed
    Phaser.Actions.Call(this.enemies.getChildren(), function(enemy){
        enemy.flipX = true;

        let dir = Math.random() < 0.5 ? 1 : -1;
        let speed = this.enemyMinSpeed + Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
        enemy.speed = dir * speed;

    }, this);

    cursors = this.input.keyboard.createCursorKeys();
    keys = this.input.keyboard.addKeys("W,A,S,D");
};

//will run up to 60 times per second
gameScene.update = function(){

    //dont exeute if terminating or resetting
    if(this.isTerminating) return;

    if(this.isResetting) return;
    
    this.goal.angle -=0.5;
    
    //input methods
    if (keys.D.isDown && this.player.x < 550) {
        this.player.x += this.playerSpeed;
    }

    if (this.input.activePointer.isDown){
        this.player.x += this.playerSpeed;
    }

    let playerRect = this.player.getBounds();
    let goalRect = this.goal.getBounds();

    //check if goal has been reached
    if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect,goalRect)){
        console.log('hit the goal');

        
        return this.gameWin();
    };

    let enemies = this.enemies.getChildren();
    let numEnemies = enemies.length;


    for(let i = 0; i < numEnemies; i++){

        enemies[i].y += enemies[i].speed;
        
        //make sure enemies dont mass min/max y
        let conditionUp = enemies[i].speed < 0 && enemies[i].y <= this.enemyMinY;
        let conditionDown = enemies[i].speed > 0 && enemies[i].y >= this.enemyMaxY;

        if(conditionUp || conditionDown){
            enemies[i].speed *= -1;
        }
        
        let enemyRect = enemies[i].getBounds();

        if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemyRect)) {
            console.log ('game over!');

            return this.gameOver();
        }

    }
};

//scene plays if game win
gameScene.gameWin = function() {
    this.isResetting = true;

    this.cameras.main.flash(1500);

    this.cameras.main.on('cameraflashcomplete', function(camera, effect){

        this.scene.restart();
    }, this);
}

//plays if you hit an enemy
gameScene.gameOver = function() {

    this.isTerminating = true;

    this.cameras.main.shake(500);

    this.cameras.main.on('camerashakecomplete', function(camera, effect){
       
        this.cameras.main.fade(750);
    }, this);

    this.cameras.main.on('camerafadeoutcomplete', function(camera, effect){
        
        this.scene.restart();
    },this);

    
}

//set up config
let config = {
    type: Phaser.AUTO, //phaser uses webGL if available; if not it uses our canvas
    width: 640,
    height: 360,
    scene: gameScene
};

let game = new Phaser.Game(config);

