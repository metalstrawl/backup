//create a scene
let gameScene = new Phaser.Scene('Game');

//speeds and sprite positions; is the game terminating or resetting
gameScene.init = function(){
    //speed for player
    this.playerSpeed = -4;

    this.enemyMinSpeed = 20;
    this.enemyMaxSpeed = 33;

    this.enemyMinX = 80;
    this.enemyMaxX = 630;

    this.isTerminating = false;
    this.isResetting = false;
    this.isInfected = false;
};

//load sprites
gameScene.preload = function(){
    //load images
    this.load.image('background','assets/background.png');
    this.load.image('player','assets/player.png');
    this.load.image('enemy','assets/bat.png');
    this.load.image('goal','assets/treasure.png');
    this.load.image('fog','assets/cloud.png');
};

//called once preload is over
gameScene.create = function(){
    let bg = this.add.sprite(0,0,'background');
    //set origin point
    bg.setOrigin(0,0);
    this.player = this.add.sprite (359,620,'player')
    this.goal = this.add.sprite (359,60,'goal')
    this.fog = this.add.sprite (690, 600,'fog')

    this.player.scaleX = 0.35;
    this.player.scaleY = 0.35;

    this.goal.scaleX = 0.7;
    this.goal.scaleY = 0.7;

    this.fog.scaleX = 0.2;
    this.fog.scaleY = 0.2;

    //enemy group
    this.enemies = this.add.group({
        key: 'enemy',
        repeat: 6,
        setXY: {
            x: 360,
            y: 90,
            stepX: 0,
            stepY: 80,
        }
    });

    Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.2, -0.2);

    //random speed for each enemy
    Phaser.Actions.Call(this.enemies.getChildren(), function(enemy){
        enemy.flipX = false;

        let dir = Math.random() < 0.5 ? 1 : -1;
        let speed = this.enemyMinSpeed + Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
        enemy.speed = dir * speed;

    }, this);


    

    //create possible input methods
    cursors = this.input.keyboard.createCursorKeys();
    keys = this.input.keyboard.addKeys("W,A,S,D");
};

//will run up to 60 times per second
gameScene.update = function(){

    //dont exeute if terminating or resetting
    if(this.isTerminating) return;

    if(this.isResetting) return;

    this.goal.angle -=0.5;
    
    //how to move
    if (keys.W.isDown) {
        this.player.y += this.playerSpeed;
    }

    if (keys.A.isDown) {
        this.player.x += this.playerSpeed;
    }

    if (keys.D.isDown) {
        this.player.x -= this.playerSpeed;
    }

    if (this.input.activePointer.isDown){
        this.player.y += this.playerSpeed;
    }

    let playerRect = this.player.getBounds();
    let goalRect = this.goal.getBounds();
    let fogRect = this.fog.getBounds();

    //check if player has reached goal
    if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect,goalRect)){
        console.log('hit the goal');

        
        return this.gameWin();
    };

    if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect,fogRect)){
        console.log('infected by the fog!')
        
        this.infection();
    };

    
    

    let enemies = this.enemies.getChildren();
    let numEnemies = enemies.length;

    for(let i = 0; i < numEnemies; i++){

        //enemy speed
        enemies[i].x += enemies[i].speed;
        
        //make sure enemies are not passing min or max X
        let conditionLeft = enemies[i].speed < 0 && enemies[i].x <= this.enemyMinX;
        let conditionRight = enemies[i].speed > 0 && enemies[i].x >= this.enemyMaxX;

        if(conditionLeft || conditionRight){
            enemies[i].speed *= -1;
        }
        
        //check enemy overlaps
        let enemyRect = enemies[i].getBounds();
        
        //hitbox detection for enemy and player
        if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemyRect)) {
            console.log ('game over!');

            return this.gameOver();
        }

    }
};

//when you reach the goal this plays
gameScene.gameWin = function() {
    this.isResetting = true;

    //camera flashes white then restarts the game
    this.cameras.main.flash(1500);

    this.cameras.main.on('cameraflashcomplete', function(camera, effect){

        this.scene.restart();
    }, this);
}


//plays when you hit an enemy
gameScene.gameOver = function() {

    this.isTerminating = true;

    //camera shakes then fades out
    this.cameras.main.shake(500);

    this.cameras.main.on('camerashakecomplete', function(camera, effect){
       
        this.cameras.main.fade(750);
    }, this);

    this.cameras.main.on('camerafadeoutcomplete', function(camera, effect){
        
        this.scene.restart();
    },this);
}

gameScene.infection = function() {

    this.isInfected = true;
}


//set up config
let config = {
    type: Phaser.AUTO, //phaser uses webGL if available; if not it uses our canvas
    width: 717,
    height: 640,
    scene: gameScene
};

let game = new Phaser.Game(config);

