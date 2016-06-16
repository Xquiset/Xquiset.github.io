//Playing dimensions = 1221 x 742
MinerTrouble.Game = function (game) {
    this.coins;
    this.coin;
    this.totalCoins;
    this.player;
    this.coinsCollected;
    this.coinsLeft;
    this.gameover;
    this.overmessage;
    this.score;
    this.music;
    this.coinCollectionSound;
    this.hurtSound;
    this.health;
    this.healthPoints;
    this.cursor;
    this.facing;
    
    this.blob;
    this.pacman;
    this.demon;
    this.dirtman;
    this.et;
    this.flameguy;
    this.miniblob;
    this.shadowman;
    this.worm;
    
    this.obstacle1;
    this.obstacle2;
    this.obstacle3;
    this.obstacle4;
    this.obstacle5;
    this.obstacle6;
    this.obstacle7;
    this.obstacle8;
    this.obstacle9;
    this.obstacle10;
    this.obstacle11;
    this.obstacle12;
    this.obstacle13;
    this.obstacle14;
    this.obstacle15;
    this.obstacle16;
    this.obstacle17;
    this.obstacle18;
    this.obstacle19;
    this.obstacle20;
    this.obstacle21;
    this.obstacle22;
    this.obstacle23;
    this.obstacle24;
    this.obstacle25;
    this.obstacle26;
    this.obstacle27;
    this.obstacle28;
    this.obstacle29;
    this.obstacle30;
    this.obstacle31;
    this.obstacle32;
    this.obstacle33;
    this.obstacle34;
    this.obstacle35;
    this.obstacle36;
    this.obstaclefix;
    this.topbar;
    this.leftbar;
    this.bottombar;
    this.rightbar;
    
    this.obstacle1a;
    this.obstacle2a;
    this.obstacle3a;
    this.obstacle4a;
    this.obstacle5a;
    this.obstacle6a;
    this.obstacle7a;
    this.obstacle8a;
    this.obstacle9a;
    this.obstacle10a;
    this.obstacle11a;
    this.obstacle12a;
    this.obstacle13a;
    this.obstacle14a;
    this.obstacle15a;
    this.obstacle16a;
    this.obstacle17a;
    this.obstacle18a;
    this.obstacle19a;
    this.obstacle20a;
    this.obstacle21a;
    this.obstacle22a;
    this.obstacle23a;
    this.obstacle24a;
    this.obstacle25a;
    this.obstacle26a;
    this.obstacle27a;
    this.obstacle28a;
    this.obstacle29a;
    this.obstacle30a;
    this.obstacle31a;
    this.obstacle32a;
    this.obstacle33a;
    this.obstacle34a;
    this.obstacle35a;
    this.obstacle36a;
    this.obstaclefixa;
    this.topbara;
    this.leftbara;
    this.bottombara;
    this.rightbara;
};

MinerTrouble.Game.prototype = {
    
    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.coinCollectionSound = this.add.audio('coincollection');
        this.hurtSound = this.add.audio('hurt');
        this.gameover = false;
        this.building = true;
        this.totalCoins = 100;
        this.totalmonsters = 5;
        this.coinsCollected = 0;
        this.healthPoints = 1000;
        this.facing = 'left';
        this.buildWorld();
        this.x = 90;
        this.y = 90;
    },
    
    updateGame: function () {
        if(this.gameover != false){
            this.score.setText('Coins Collected: NONE');
        }else{
            this.score.setText('Coins Collected: ' + this.coinsCollected);
        }
    },
    
    buildWorld: function (){
        this.add.image(-20, 0, 'level');
        this.buildLevel();
        this.buildMiner();
        this.buildCoins();
        this.buildMonsters();
        this.score = this.add.bitmapText(5, 13, 'eightbitwonder', 'Coins Collected- ' + this.coinsCollected, 15);
        this.coinsLeft = this.add.bitmapText(400, 13, 'eightbitwonder', 'Coins Left- ' + this.totalCoins, 15);
        this.health = this.add.bitmapText(900, 13, 'eightbitwonder', 'Health- ' + this.healthPoints, 15);
    },
    
    buildMonsters: function () {
        //Blob
        this.blob = this.add.sprite(300, 500, 'blob');
        this.physics.enable(this.blob, Phaser.Physics.ARCADE);
        this.blob.checkWorldBounds = true;
        this.blob.body.collideWorldBounds = true;
        
        //Pacman
        this.pacman = this.add.sprite(100, 200, 'pacman');
        this.physics.enable(this.pacman, Phaser.Physics.ARCADE);
        this.pacman.checkWorldBounds = true;
        this.pacman.body.collideWorldBounds = true;
        
        //Dirtman
        this.dirtman = this.add.sprite(300, 600, 'dirtman');
        this.physics.enable(this.dirtman, Phaser.Physics.ARCADE);
        this.dirtman.checkWorldBounds = true;
        this.dirtman.body.collideWorldBounds = true;
        
        //ET
        this.et = this.add.sprite(600, 130, 'et');
        this.physics.enable(this.et, Phaser.Physics.ARCADE);
        this.et.checkWorldBounds = true;
        this.et.body.collideWorldBounds = true;
        
        //Flameguy
        this.flameguy = this.add.sprite(600, 450, 'flameguy');
        this.physics.enable(this.flameguy, Phaser.Physics.ARCADE);
        this.flameguy.checkWorldBounds = true;
        this.flameguy.body.collideWorldBounds = true;
        
        //Miniblob
        this.miniblob = this.add.sprite(1000, 400, 'miniblob');
        this.physics.enable(this.miniblob, Phaser.Physics.ARCADE);
        this.miniblob.checkWorldBounds = true;
        this.miniblob.body.collideWorldBounds = true;
        
        //worm
        this.worm = this.add.sprite(120, 425, 'worm');
        this.physics.enable(this.worm, Phaser.Physics.ARCADE);
        this.worm.checkWorldBounds = true;
        this.worm.body.collideWorldBounds = true;
    },
    
    buildMiner: function () {
        this.player = this.add.sprite(65, 130, 'miner');
        this.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.camera.follow(this.player);
        this.cursor = this.input.keyboard.createCursorKeys();
        this.player.anchor.set(0.5);
        this.player.checkWorldBounds = true;
        this.player.body.collideWorldBounds = true;
    },
    
    buildLevel: function () {
        //Obstacles are in order from left to right as they appear on the level
        
        //obstacle 1 
        this.obstacle1a = this.add.group();
        this.obstacle1a.enableBody = true;
        this.obstacle1a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle1 = this.obstacle1a.create(80, 80, 'bar');
        this.obstacle1.body.immovable = true;
        
        //obstacle 2
        this.obstacle2a = this.add.group();
        this.obstacle2a.enableBody = true;
        this.obstacle2a.pyhsicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle2 = this.obstacle2a.create(80, 120, 'sidebar');
        this.obstacle2.body.immovable = true;
        
        //obstacle 3
        this.obstacle3a = this.add.group();
        this.obstacle3a.enableBody = true;
        this.obstacle3a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle3 = this.obstacle3a.create(240, 80, 'bar');
        this.obstacle3.body.immovable = true;
        
        //obstacle 4
        this.obstacle4a = this.add.group();
        this.obstacle4a.enableBody = true;
        this.obstacle4a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle4 = this.obstacle4a.create(320, 120, 'sidebar');
        this.obstacle4.body.immovable = true;
        
        //obstacle 5
        this.obstacle5a = this.add.group();
        this.obstacle5a.enableBody = true;
        this.obstacle5a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle5 = this.obstacle5a.create(400, 80, 'bar');
        this.obstacle5.body.immovable = true;
        
        //obstacle 6
        this.obstacle6a = this.add.group();
        this.obstacle6a.enableBody = true;
        this.obstacle6a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle6 = this.obstacle6a.create(600, 80, 'bar');
        this.obstacle6.body.immovable = true;
        
        //obstacle 7
        this.obstacle7a = this.add.group();
        this.obstacle7a.enableBody = true;
        this.obstacle7a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle7 = this.obstacle7a.create(800, 80, 'bar');
        this.obstacle7.body.immovable = true;
        
        //obstacle 8
        this.obstacle8a = this.add.group();
        this.obstacle8a.enableBody = true;
        this.obstacle8a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle8 = this.obstacle8a.create(800, 120, 'sidebar');
        this.obstacle8.body.immovable = true;
        
        //obstacle 9
        this.obstacle9a = this.add.group();
        this.obstacle9a.enableBody = true;
        this.obstacle9a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle9 = this.obstacle9a.create(960, 80, 'bar');
        this.obstacle9.body.immovable = true;
        
        //obstacle 10
        this.obstacle10a = this.add.group();
        this.obstacle10a.enableBody = true;
        this.obstacle10a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle10 = this.obstacle10a.create(1040, 120, 'sidebar');
        this.obstacle10.body.immovable = true;
        
        //obstacle 11
        this.obstacle11a = this.add.group();
        this.obstacle11a.enableBody = true;
        this.obstacle11a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle11 = this.obstacle11a.create(1120, 80, 'bar');
        this.obstacle11.body.immovable = true;
        
        //obstacle 12
        this.obstacle12a = this.add.group();
        this.obstacle12a.enableBody = true;
        this.obstacle12a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle12 = this.obstacle12a.create(200, 280, 'sidebar');
        this.obstacle12.body.immovable = true;
        
        //obstacle 13
        this.obstacle13a = this.add.group();
        this.obstacle13a.enableBody = true;
        this.obstacle13a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle13 = this.obstacle13a.create(560, 280, 'sidebar');
        this.obstacle13.body.immovable = true;
        
        //obstacle 14
        this.obstacle14a = this.add.group();
        this.obstacle14a.enableBody = true;
        this.obstacle14a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle14 = this.obstacle14a.create(920, 280, 'sidebar');
        this.obstacle14.body.immovable = true;
        
        //obstacle 15
        this.obstacle15a = this.add.group();
        this.obstacle15a.enableBody = true;
        this.obstacle15a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle15 = this.obstacle15a.create(80, 380, 'bar');
        this.obstacle15.body.immovable = true;
        
        //obstacle 16
        this.obstacle16a = this.add.group();
        this.obstacle16a.enableBody = true;
        this.obstacle16a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle16 = this.obstacle16a.create(240, 380, 'bar');
        this.obstacle16.body.immovable = true;
        
        //obstacle 17
        this.obstacle17a = this.add.group();
        this.obstacle17a.enableBody = true;
        this.obstacle17a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle17 = this.obstacle17a.create(400, 380, 'bar');
        this.obstacle17.body.immovable = true;
        
        //obstacle 18
        this.obstacle18a = this.add.group();
        this.obstacle18a.enableBody = true;
        this.obstacle18a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle18 = this.obstacle18a.create(560, 415, 'sidebar');
        this.obstacle18.body.immovable = true;
        
        //obstacle 19
        this.obstacle19a = this.add.group();
        this.obstacle19a.enableBody = true;
        this.obstacle19a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle19 = this.obstacle19a.create(800, 380, 'bar');
        this.obstacle19.body.immovable = true;
        
        //obstacle 20
        this.obstacle20a = this.add.group();
        this.obstacle20a.enableBody = true;
        this.obstacle20a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle20 = this.obstacle20a.create(800, 415, 'sidebar');
        this.obstacle20.body.immovable = true;
        
        //obstacle 21
        this.obstacle21a = this.add.group();
        this.obstacle21a.enableBody = true;
        this.obstacle21a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle21 = this.obstacle21a.create(960, 380, 'bar');
        this.obstacle21.body.immovable = true;
        
        //obstacle 22
        this.obstacle22a = this.add.group();
        this.obstacle22a.enableBody = true;
        this.obstacle22a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle22 = this.obstacle22a.create(1040, 415, 'sidebar');
        this.obstacle22.body.immovable = true;
        
        //obstacle 23
        this.obstacle23a = this.add.group();
        this.obstacle23a.enableBody = true;
        this.obstacle23a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle23 = this.obstacle23a.create(1120, 380, 'bar');
        this.obstacle23.body.immovable = true;
        
        //obstacle 24
        this.obstacle24a = this.add.group();
        this.obstacle24a.enableBody = true;
        this.obstacle24a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle24 = this.obstacle24a.create(200, 550, 'sidebar');
        this.obstacle24.body.immovable = true;
        
        //obstacle 25
        this.obstacle25a = this.add.group();
        this.obstacle25a.enableBody = true;
        this.obstacle25a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle25 = this.obstacle25a.create(560, 550, 'sidebar');
        this.obstacle25.body.immovable = true;
        
        //obstacle 26
        this.obstacle26a = this.add.group();
        this.obstacle26a.enableBody = true;
        this.obstacle26a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle26 = this.obstacle26a.create(920, 550, 'sidebar');
        this.obstacle26.body.immovable = true;
        
        //obstacle 27
        this.obstacle27a = this.add.group();
        this.obstacle27a.enableBody = true;
        this.obstacle27a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle27 = this.obstacle1a.create(80, 620, 'bar');
        this.obstacle27.body.immovable = true;
        
        //obstacle 28
        this.obstacle28a = this.add.group();
        this.obstacle28a.enableBody = true;
        this.obstacle28a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle28 = this.obstacle28a.create(80, 660, 'sidebar');
        this.obstacle28.body.immovable = true;
        
        //obstacle 29
        this.obstacle29a = this.add.group();
        this.obstacle29a.enableBody = true;
        this.obstacle29a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle29 = this.obstacle29a.create(240, 620, 'bar');
        this.obstacle29.body.immovable = true;
        
        //obstacle 30
        this.obstacle30a = this.add.group();
        this.obstacle30a.enableBody = true;
        this.obstacle30a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle30 = this.obstacle30a.create(320, 660, 'sidebar');
        this.obstacle30.body.immovable = true;
        
        //obstacle fix
        this.obstaclefixa = this.add.group();
        this.obstaclefixa.enableBody = true;
        this.obstaclefixa.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstaclefix = this.obstaclefixa.create(400, 620, 'bar');
        this.obstaclefix.body.immovable = true;
        //obstacle 31
        this.obstacle31a = this.add.group();
        this.obstacle31a.enableBody = true;
        this.obstacle31a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle31 = this.obstacle31a.create(600, 620, 'bar');
        this.obstacle31.body.immovable = true;
        
        //obstacle 32
        this.obstacle32a = this.add.group();
        this.obstacle32a.enableBody = true;
        this.obstacle32a.physicsBodyTyep = Phaser.Physics.ARCADE;
        
        this.obstacle32 = this.obstacle32a.create(800, 620, 'bar');
        this.obstacle32.body.immovable = true;
        
        //obstacle 33
        this.obstacle33a = this.add.group();
        this.obstacle33a.enableBody = true;
        this.obstacle33a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle33 = this.obstacle33a.create(800, 660, 'sidebar');
        this.obstacle33.body.immovable = true;
        
        //obstacle 34
        this.obstacle34a = this.add.group();
        this.obstacle34a.enableBody = true;
        this.obstacle34a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle34 = this.obstacle34a.create(960, 620, 'bar');
        this.obstacle34.body.immovable = true;
        
        //obstacle 35
        this.obstacle35a = this.add.group();
        this.obstacle35a.enableBody = true;
        this.obstacle35a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle35 = this.obstacle35a.create(1040, 660, 'sidebar');
        this.obstacle35.body.immovable = true;
        
        //obstacle 36
        this.obstacle36a = this.add.group();
        this.obstacle36a.enableBody = true;
        this.obstacle36a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle36 = this.obstacle36a.create(1120, 620, 'bar');
        this.obstacle36.body.immovable = true;
        
        //Top boundary Done
        this.topbara = this.add.group();
        this.topbara.enableBody = true;
        this.topbara.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.topbar = this.topbara.create(0, 0, 'top bar');
        this.topbar.body.immovable = true;
        
        //Left boundary Done
        this.leftbara = this.add.group();
        this.leftbara.enableBody = true;
        this.leftbara.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.leftbar = this.leftbara.create(-20, 0, 'left bar');
        this.leftbar.body.immovable = true;
        
        //Right Boundary Done
        this.rightbara = this.add.group();
        this.rightbara.enableBody = true;
        this.rightbara.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.rightbar = this.rightbara.create(1200, 0, 'left bar');
        this.rightbar.body.immovable = true;
        
        //Bottom boundary Done
        this.bottombara = this.add.group();
        this.bottombara.enableBody = true;
        this.bottombara.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.bottombar = this.bottombara.create(0, 750, 'top bar');
        this.bottombar.body.immovable = true;
    },
    
    checkCoinsLeft: function () {
        if(this.coinsCollected == 100){
            this.gameover = true;
            this.player.kill();
            this.blob.kill();
            this.pacman.kill();
            this.dirtman.kill();
            this.et.kill();
            this.flameguy.kill();
            this.miniblob.kill();
            this.worm.kill();
            this.overmessage = this.add.bitmapText(this.world.centerX-180, this.world.centerY-40, 'eightbitwonder', 'YOU WON!!!\n\n' + 'CONGRATULATIONS', 42);
            this.overmessage.align = "center";
            this.overmessage.inputEnabled = true;
            this.overmessage.events.onInputDown.addOnce(this.quitGame, this);
        }
    },
    
    buildCoins: function () {
        this.coins = this.add.group();
        this.coins.enableBody = true;
        this.coins.physicsBodyType = Phaser.Physics.ARCADE;
        
        for(this.i = 0; this.i < this.totalCoins; this.i++)
        {
            if(this.i <= 10){
                this.x = Math.floor(Math.random() * (1100 - 70) + 70);
                this.y = 50;
                this.coins.create(this.x, this.y, 'coin');
            } else if(this. i > 10 && this.i <= 20) {
                this.x = Math.floor(Math.random() * (1100 - 70) + 70);
                this.y = 220;
                this.coins.create(this.x, this.y, 'coin');
            } else if(this.i > 20 && this.i <= 30){
                this.x = Math.floor(Math.random() * (1100 - 70) + 70);
                this.y = 330;
                this.coins.create(this.x, this.y, 'coin');
            } else if(this.i > 30 && this.i <= 40){
                this.x = Math.floor(Math.random() * (1100 - 70) + 70);
                this.y = 510;
                this.coins.create(this.x, this.y, 'coin');
            } else if(this.i > 40 && this.i <= 50){
                this.x = Math.floor(Math.random() * (1100 - 70) + 70);
                this.y = 590;
                this.coins.create(this.x, this.y, 'coin')
            } else if(this.i > 50 && this.i <= 60){
                this.x = Math.floor(Math.random() * (1100 - 70) + 70);
                this.y = 725;
                this.coins.create(this.x, this.y, 'coin');
            } else if(this.i > 60 && this.i <= 70){
                this.x = 50;
                this.y = Math.floor(Math.random() * (725 - 50) + 50);
                this.coins.create(this.x, this.y, 'coin');
            } else if(this.i > 70 && this.i <= 80) {
                this.x = 470;
                this.y = Math.floor(Math.random() * (725 - 50) + 50);
                this.coins.create(this.x, this.y, 'coin');
            } else if(this.i > 80 && this.i <= 90){
                this.x = 710;
                this.y = Math.floor(Math.random() * (725 - 50) + 50);
                this.coins.create(this.x, this.y, 'coin');
            } else if(this.i > 90 && this.i <= 100){
                this.x = 1180;
                this.y = Math.floor(Math.random() * (725 - 50) + 50);
                this.coins.create(this.x, this.y, 'coin');
            }
        }
    },
    
    checkHealth: function () {
        if(this.healthPoints <= 0){
            this.gameover = true;
            this.player.kill();
            this.blob.kill();
            this.pacman.kill();
            this.dirtman.kill();
            this.et.kill();
            this.flameguy.kill();
            this.miniblob.kill();
            this.worm.kill();
            this.health.setText('Health: 0');
            this.overmessage = this.add.bitmapText(this.world.centerX-180, this.world.centerY-40, 'eightbitwonder', 'GAME OVER\n\n' + this.coinsCollected, 42);
            this.overmessage.align = "center";
            this.overmessage.inputEnabled = true;
            this.overmessage.events.onInputDown.addOnce(this.quitGame, this);
        }else{
            this.health.setText('Health: ' + this.healthPoints);
        }
    },
    
    quitGame: function (pointer) {
        this.state.start('StartMenu');
    },
    
    update: function () {
        this.player.body.velocity.x = 0;
        
        //Monster Movement
        this.physics.arcade.moveToObject(this.worm, this.player, 50);
        this.physics.arcade.moveToObject(this.blob, this.player, 50);
        this.physics.arcade.moveToObject(this.pacman, this.player, 50);
        this.physics.arcade.moveToObject(this.dirtman, this.player, 50);
        this.physics.arcade.moveToObject(this.miniblob, this.player, 50);
        this.physics.arcade.moveToObject(this.et, this.player, 50);
        this.physics.arcade.moveToObject(this.flameguy, this.player, 50);
        
        //Player hits coins
        this.physics.arcade.collide(this.player, this.coins, this.playerHitCoin, null, this);
        
        //Player hits obstacle
        this.physics.arcade.collide(this.player, this.obstacle1a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle2a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle3a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle4a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle5a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle6a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle7a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle8a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle9a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle10a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle11a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle12a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle13a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle14a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle15a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle16a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle17a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle18a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle19a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle20a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle21a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle22a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle23a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle24a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle25a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle26a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle27a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle28a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle29a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle30a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle31a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle32a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle33a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle34a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle35a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstacle36a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.obstaclefixa, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.topbara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.leftbara, this.playderHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.bottombara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.rightbara, this.playerHitObstacle, null, this);
        
        //Player Hits Monster
        this.physics.arcade.collide(this.player, this.blob, this.playerHitMonster, null, this);
        this.physics.arcade.collide(this.player, this.pacman, this.playerHitMonster, null, this);
        this.physics.arcade.collide(this.player, this.dirtman, this.playerHitMonster, null, this);
        this.physics.arcade.collide(this.player, this.et, this.playerHitMonster, null, this);
        this.physics.arcade.collide(this.player, this.flameguy, this.playerHitMonster, null, this);
        this.physics.arcade.collide(this.player, this.miniblob, this.playerHitMonster, null, this);
        this.physics.arcade.collide(this.player, this.worm, this.playerHitMonster, null, this);
        
        //blob hits obstacle
        this.physics.arcade.collide(this.blob, this.obstacle1a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle2a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle3a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle4a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle5a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle6a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle7a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle8a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle9a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle10a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle11a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle12a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle13a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle14a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle15a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle16a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle17a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle18a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle19a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle20a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle21a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle22a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle23a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle24a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle25a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle26a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle27a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle28a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle29a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle30a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle31a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle32a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle33a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle34a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle35a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstacle36a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.obstaclefixa, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.topbara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.leftbara, this.playderHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.bottombara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.blob, this.rightbara, this.playerHitObstacle, null, this);
        
        //pacman hits obstacle
        this.physics.arcade.collide(this.pacman, this.obstacle1a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle2a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle3a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle4a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle5a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle6a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle7a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle8a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle9a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle10a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle11a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle12a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle13a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle14a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle15a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle16a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle17a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle18a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle19a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle20a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle21a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle22a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle23a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle24a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle25a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle26a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle27a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle28a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle29a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle30a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle31a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle32a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle33a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle34a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle35a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstacle36a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.obstaclefixa, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.topbara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.leftbara, this.playderHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.bottombara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.pacman, this.rightbara, this.playerHitObstacle, null, this);
        
        //dirtman hits obstacle
        this.physics.arcade.collide(this.dirtman, this.obstacle1a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle2a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle3a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle4a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle5a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle6a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle7a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle8a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle9a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle10a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle11a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle12a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle13a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle14a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle15a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle16a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle17a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle18a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle19a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle20a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle21a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle22a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle23a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle24a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle25a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle26a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle27a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle28a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle29a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle30a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle31a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle32a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle33a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle34a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle35a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstacle36a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.obstaclefixa, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.topbara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.leftbara, this.playderHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.bottombara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.dirtman, this.rightbara, this.playerHitObstacle, null, this);

        //et hits obstacle
        this.physics.arcade.collide(this.et, this.obstacle1a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle2a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle3a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle4a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle5a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle6a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle7a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle8a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle9a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle10a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle11a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle12a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle13a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle14a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle15a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle16a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle17a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle18a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle19a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle20a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle21a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle22a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle23a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle24a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle25a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle26a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle27a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle28a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle29a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle30a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle31a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle32a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle33a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle34a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle35a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstacle36a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.obstaclefixa, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.topbara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.leftbara, this.playderHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.bottombara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.et, this.rightbara, this.playerHitObstacle, null, this);
        
        //flameguy hits obstacle
        this.physics.arcade.collide(this.flameguy, this.obstacle1a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle2a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle3a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle4a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle5a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle6a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle7a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle8a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle9a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle10a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle11a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle12a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle13a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle14a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle15a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle16a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle17a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle18a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle19a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle20a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle21a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle22a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle23a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle24a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle25a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle26a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle27a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle28a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle29a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle30a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle31a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle32a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle33a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle34a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle35a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstacle36a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.obstaclefixa, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.topbara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.leftbara, this.playderHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.bottombara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.flameguy, this.rightbara, this.playerHitObstacle, null, this);
        
        //miniblob hits obstacle
        this.physics.arcade.collide(this.miniblob, this.obstacle1a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle2a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle3a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle4a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle5a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle6a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle7a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle8a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle9a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle10a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle11a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle12a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle13a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle14a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle15a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle16a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle17a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle18a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle19a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle20a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle21a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle22a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle23a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle24a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle25a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle26a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle27a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle28a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle29a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle30a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle31a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle32a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle33a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle34a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle35a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstacle36a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.obstaclefixa, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.topbara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.leftbara, this.playderHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.bottombara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.miniblob, this.rightbara, this.playerHitObstacle, null, this);
        
        //worm hits obstacle
        this.physics.arcade.collide(this.worm, this.obstacle1a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle2a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle3a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle4a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle5a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle6a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle7a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle8a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle9a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle10a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle11a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle12a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle13a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle14a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle15a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle16a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle17a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle18a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle19a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle20a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle21a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle22a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle23a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle24a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle25a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle26a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle27a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle28a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle29a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle30a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle31a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle32a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle33a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle34a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle35a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstacle36a, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.obstaclefixa, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.topbara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.leftbara, this.playderHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.bottombara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.worm, this.rightbara, this.playerHitObstacle, null, this);

        if (this.cursor.left.isDown)
        {
            this.player.body.velocity.x = -150;
            this.player.body.velocity.y = 0;
        }
        else if (this.cursor.right.isDown)
        {
            this.player.body.velocity.x = 150;
            this.player.body.velocity.y = 0;
        }
        else if (this.cursor.down.isDown)
        {
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 150;
        }
        else if (this.cursor.up.isDown)
        {
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = -150;
        }
        else
        {
            if (this.facing != 'idle')
            {
                this.player.animations.stop();
            }
            if (this.facing == 'left')
            {
                this.player.frame = 2;
            }
            else if(this.facing == 'up')
            {
                this.player.frame = 7;
            }
            else if(this.facing == 'down')
            {
                this.player.frame = 1; 
            }
            else if(this.facing == 'right'){
                this.player.frame = 3
            }
            else
            {
                this.player.frame = 1;
                
                //Monster Movement
                this.physics.arcade.moveToObject(this.worm, this.player, 200);
                this.physics.arcade.moveToObject(this.blob, this.player, 50);
                this.physics.arcade.moveToObject(this.pacman, this.player, 50);
                this.physics.arcade.moveToObject(this.dirtman, this.player, 50);
                this.physics.arcade.moveToObject(this.miniblob, this.player, 50);
                this.physics.arcade.moveToObject(this.et, this.player, 50);
                this.physics.arcade.moveToObject(this.flameguy, this.player, 50);
                
                //Player hits coins
                this.physics.arcade.collide(this.player, this.coins, this.playerHitCoin, null, this);

                //Player hits obstacle
                this.physics.arcade.collide(this.player, this.obstacle1a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle2a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle3a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle4a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle5a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle6a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle7a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle8a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle9a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle10a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle11a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle12a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle13a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle14a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle15a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle16a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle17a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle18a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle19a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle20a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle21a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle22a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle23a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle24a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle25a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle26a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle27a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle28a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle29a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle30a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle31a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle32a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle33a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle34a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle35a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstacle36a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.obstaclefixa, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.topbara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.leftbara, this.playderHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.bottombara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.rightbara, this.playerHitObstacle, null, this);

                //Player Hits Monster
                this.physics.arcade.collide(this.player, this.blob, this.playerHitMonster, null, this);
                this.physics.arcade.collide(this.player, this.pacman, this.playerHitMonster, null, this);
                this.physics.arcade.collide(this.player, this.dirtman, this.playerHitMonster, null, this);
                this.physics.arcade.collide(this.player, this.et, this.playerHitMonster, null, this);
                this.physics.arcade.collide(this.player, this.flameguy, this.playerHitMonster, null, this);
                this.physics.arcade.collide(this.player, this.miniblob, this.playerHitMonster, null, this);
                this.physics.arcade.collide(this.player, this.worm, this.playerHitMonster, null, this);

                //blob hits obstacle
                this.physics.arcade.collide(this.blob, this.obstacle1a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle2a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle3a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle4a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle5a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle6a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle7a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle8a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle9a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle10a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle11a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle12a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle13a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle14a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle15a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle16a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle17a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle18a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle19a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle20a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle21a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle22a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle23a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle24a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle25a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle26a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle27a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle28a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle29a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle30a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle31a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle32a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle33a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle34a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle35a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstacle36a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.obstaclefixa, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.topbara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.leftbara, this.playderHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.bottombara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.blob, this.rightbara, this.playerHitObstacle, null, this);
        
                //pacman hits obstacle
                this.physics.arcade.collide(this.pacman, this.obstacle1a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle2a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle3a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle4a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle5a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle6a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle7a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle8a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle9a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle10a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle11a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle12a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle13a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle14a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle15a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle16a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle17a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle18a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle19a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle20a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle21a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle22a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle23a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle24a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle25a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle26a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle27a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle28a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle29a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle30a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle31a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle32a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle33a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle34a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle35a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstacle36a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.obstaclefixa, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.topbara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.leftbara, this.playderHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.bottombara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.pacman, this.rightbara, this.playerHitObstacle, null, this);
        
                //dirtman hits obstacle
                this.physics.arcade.collide(this.dirtman, this.obstacle1a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle2a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle3a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle4a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle5a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle6a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle7a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle8a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle9a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle10a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle11a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle12a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle13a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle14a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle15a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle16a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle17a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle18a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle19a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle20a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle21a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle22a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle23a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle24a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle25a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle26a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle27a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle28a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle29a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle30a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle31a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle32a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle33a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle34a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle35a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstacle36a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.obstaclefixa, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.topbara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.leftbara, this.playderHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.bottombara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.dirtman, this.rightbara, this.playerHitObstacle, null, this);

                //et hits obstacle
                this.physics.arcade.collide(this.et, this.obstacle1a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle2a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle3a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle4a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle5a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle6a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle7a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle8a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle9a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle10a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle11a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle12a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle13a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle14a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle15a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle16a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle17a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle18a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle19a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle20a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle21a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle22a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle23a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle24a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle25a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle26a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle27a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle28a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle29a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle30a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle31a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle32a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle33a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle34a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle35a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstacle36a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.obstaclefixa, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.topbara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.leftbara, this.playderHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.bottombara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.et, this.rightbara, this.playerHitObstacle, null, this);
        
                //flameguy hits obstacle
                this.physics.arcade.collide(this.flameguy, this.obstacle1a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle2a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle3a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle4a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle5a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle6a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle7a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle8a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle9a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle10a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle11a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle12a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle13a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle14a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle15a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle16a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle17a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle18a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle19a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle20a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle21a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle22a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle23a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle24a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle25a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle26a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle27a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle28a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle29a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle30a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle31a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle32a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle33a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle34a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle35a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstacle36a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.obstaclefixa, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.topbara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.leftbara, this.playderHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.bottombara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.flameguy, this.rightbara, this.playerHitObstacle, null, this);
        
                //miniblob hits obstacle
                this.physics.arcade.collide(this.miniblob, this.obstacle1a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle2a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle3a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle4a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle5a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle6a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle7a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle8a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle9a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle10a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle11a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle12a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle13a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle14a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle15a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle16a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle17a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle18a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle19a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle20a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle21a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle22a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle23a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle24a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle25a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle26a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle27a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle28a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle29a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle30a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle31a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle32a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle33a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle34a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle35a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstacle36a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.obstaclefixa, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.topbara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.leftbara, this.playderHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.bottombara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.miniblob, this.rightbara, this.playerHitObstacle, null, this);
        
                //worm hits obstacle
                this.physics.arcade.collide(this.worm, this.obstacle1a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle2a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle3a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle4a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle5a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle6a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle7a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle8a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle9a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle10a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle11a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle12a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle13a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle14a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle15a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle16a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle17a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle18a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle19a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle20a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle21a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle22a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle23a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle24a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle25a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle26a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle27a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle28a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle29a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle30a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle31a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle32a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle33a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle34a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle35a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstacle36a, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.obstaclefixa, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.topbara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.leftbara, this.playderHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.bottombara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.worm, this.rightbara, this.playerHitObstacle, null, this);
            }
            this.facing = 'idle';
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
        }
    },
    
    playerHitCoin: function (_player, _coin) {
        _coin.kill();
        this.coinCollectionSound.play('', 0, 0.3, false);
        this.coinsCollected += 1;
        this.totalCoins -= 1;
        this.score.setText('Coins Collected- ' + this.coinsCollected);
        this.coinsLeft.setText('Coins Left- ' + this.totalCoins);
        
        this.checkCoinsLeft();
    },
    
    playerHitObstacle: function(_player, _obstacle) {
        
    },
    
    playerHitMonster: function(_player, _monster) {
        this.hurtSound.play('', 0, 0,3, false);
        this.healthPoints -= 10;
        this.checkHealth();
    }
};