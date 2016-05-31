MinerTrouble.Game = function (game) {
    this.coins;
    this.coin;
    this.player;
    this.coinsCollected;
    this.gameover;
    this.overmessage;
    this.score;
    this.music;
    this.ouch;
    this.health;
    this.healthPoints;
    this.cursor;
    this.facing;
    
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
    this.topbara;
    this.leftbara;
    this.bottombara;
    this.rightbara;
};

MinerTrouble.Game.prototype = {
    
    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.gameover = false;
        this.building = true;
        this.totalmonsters = 5;
        this.coinsCollected = 0;
        this.healthPoints = 1000;
        this.facing = 'left';
        this.buildWorld();
    },
    
    updateGame: function () {
        if(this.gameover != false){
            this.score.setText('Coins Collected: Dead!');
        }else{
            this.score.setText('Coins Collected: ' + this.coinsCollected);
        }
    },
    
    buildWorld: function (){
        this.add.image(-20, 0, 'level');
        this.buildLevel();
        this.buildMiner();
        this.buildCoins();
        this.score = this.add.bitmapText(5, 20, 'eightbitwonder', 'Coins Collected: ' + this.coinsCollected, 15);
        this.health = this.add.bitmapText(5, 40, 'eightbitwonder', 'Health: ' + this.healthPoints, 15);
    },
    
    buildMonsters: function () {
        
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
        //obstacle1 & obstacle2 make right T*
        this.obstacle1a = this.add.group();
        this.obstacle1a.enableBody = true;
        this.obstacle1a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle1 = this.obstacle1a.create(80, 80, 'bar');
        this.obstacle1.body.immovable = true;
        
        this.obstacle2a = this.add.group();
        this.obstacle2a.enableBody = true;
        this.obstacle2a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle2 = this.obstacle2a.create(80, 120, 'sidebar');
        this.obstacle2.body.immovable = true;
        
        //obstacle3*
        this.obstacle3a = this.add.group();
        this.obstacle3a.enableBody = true;
        this.obstacle3a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle3 = this.obstacle3a.create(240, 240, 'sidebar');
        this.obstacle3.body.immovable = true;
        
        //obstacle4*
        this.obstacle4a = this.add.group();
        this.obstacle4a.enableBody = true;
        this.obstacle4a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle4 = this.obstacle4a.create(480, 320, 'bar');
        this.obstacle4.body.immovable = true;
        
        //obstacle5*
        this.obstacle5a = this.add.group();
        this.obstacle5a.enableBody = true;
        this.obstacle5a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle5 = this.obstacle5a.create(80, 320, 'bar');
        this.obstacle5.body.immovable = true;
        
        //obstacle6*
        this.obstacle6a = this.add.group();
        this.obstacle6a.enableBody = true;
        this.obstacle6a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle6 = this.obstacle6a.create(280, 320, 'bar');
        this.obstacle6.body.immovable = true;
        
        //obstacle7*
        this.obstacle7a = this.add.group();
        this.obstacle7a.enableBody = true;
        this.obstacle7a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle7 = this.obstacle7a.create(280, 80, 'bar');
        this.obstacle7.body.immovable = true;
        
        //obstacle8 & obstacle9 makes left T*
        this.obstacle8a = this.add.group();
        this.obstacle8a.enableBody = true;
        this.obstacle8a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle8 = this.obstacle8a.create(480, 80, 'bar');
        this.obstacle8.body.immovable = true;
        
        this.obstacle9a = this.add.group();
        this.obstacle9a.enableBody = true;
        this.obstacle9a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle9 = this.obstacle9a.create(400, 120, 'sidebar');
        this.obstacle9.body.immovable = true;
        
        //obstacle10*
        this.obstacle10a = this.add.group();
        this.obstacle10a.enableBody = true;
        this.obstacle10a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle10 = this.obstacle10a.create(240, 400, 'sidebar');
        this.obstacle10.body.immovable = true;
        
        //obstacle11 & obstacle12 make right T*
        this.obstacle11a = this.add.group();
        this.obstacle11a.enableBody = true;
        this.obstacle11a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle11 = this.obstacle11a.create(800, 80, 'bar');
        this.obstacle11.body.immovable = true;
        
        this.obstacle12a = this.add.group();
        this.obstacle12a.enableBody = true;
        this.obstacle12a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle12 = this.obstacle12a.create(800, 120, 'sidebar');
        this.obstacle12.body.immovable = true;
        
        //obstacle13*
        this.obstacle13a = this.add.group();
        this.obstacle13a.enableBody = true;
        this.obstacle13a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle13 = this.obstacle13a.create(600, 240, 'sidebar');
        this.obstacle3.body.immovable = true;
        
        //obstacle14*
        this.obstacle14a = this.add.group();
        this.obstacle14a.enableBody = true;
        this.obstacle14a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle14 = this.obstacle14a.create(800, 320, 'bar');
        this.obstacle14.body.immovable = true;
        
        //obstacle15*
        this.obstacle15a = this.add.group();
        this.obstacle15a.enableBody = true;
        this.obstacle15a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle15 = this.obstacle15a.create(1280, 320, 'bar');
        this.obstacle15.body.immovable = true;
        
        //obstacle16*
        this.obstacle16a = this.add.group();
        this.obstacle16a.enableBody = true;
        this.obstacle16a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle16 = this.obstacle16a.create(1040, 320, 'bar');
        this.obstacle16.body.immovable = true;
        
        //obstacle17*
        this.obstacle17a = this.add.group();
        this.obstacle17a.enableBody = true;
        this.obstacle17a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle17 = this.obstacle17a.create(1040, 80, 'bar');
        this.obstacle17.body.immovable = true;
        
        //obstacle18 & obstacle19 makes left T*
        this.obstacle18a = this.add.group();
        this.obstacle18a.enableBody = true;
        this.obstacle18a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle18 = this.obstacle18a.create(1280, 80, 'bar');
        this.obstacle18.body.immovable = true;
        
        this.obstacle19a = this.add.group();
        this.obstacle19a.enableBody = true;
        this.obstacle19a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle19 = this.obstacle19a.create(1200, 120, 'sidebar');
        this.obstacle19.body.immovable = true;
        
        //obstacle20*
        this.obstacle20a = this.add.group();
        this.obstacle20a.enableBody = true;
        this.obstacle20a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle20 = this.obstacle20a.create(600, 360, 'sidebar');
        this.obstacle20.body.immovable = true;
        
        //obstacle21 & obstacle22 make right T*
        this.obstacle21a = this.add.group();
        this.obstacle21a.enableBody = true;
        this.obstacle21a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle21 = this.obstacle21a.create(80, 580, 'bar');
        this.obstacle21.body.immovable = true;
        
        this.obstacle22a = this.add.group();
        this.obstacle22a.enableBody = true;
        this.obstacle22a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle22 = this.obstacle22a.create(80, 620, 'sidebar');
        this.obstacle22.body.immovable = true;
        
        //obstacle23*
        this.obstacle23a = this.add.group();
        this.obstacle23a.enableBody = true;
        this.obstacle23a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle23 = this.obstacle23a.create(1000, 240, 'sidebar');
        this.obstacle23.body.immovable = true;
        
        //obstacle24*
        this.obstacle24a = this.add.group();
        this.obstacle24a.enableBody = true;
        this.obstacle24a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle24 = this.obstacle24a.create(280, 580, 'bar');
        this.obstacle24.body.immovable = true;
        
        //obstacle25*
        this.obstacle25a = this.add.group();
        this.obstacle25a.enableBody = true;
        this.obstacle25a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle25 = this.obstacle25a.create(640, 80, 'bar');
        this.obstacle25.body.immovable = true;
        
        //obstacle26*
        this.obstacle26a = this.add.group();
        this.obstacle26a.enableBody = true;
        this.obstacle26a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle26 = this.obstacle26a.create(640, 580, 'bar');
        this.obstacle26.body.immovable = true;
        
        //obstacle27*
        this.obstacle27a = this.add.group();
        this.obstacle27a.enableBody = true;
        this.obstacle27a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle27 = this.obstacle27a.create(1040, 580, 'bar');
        this.obstacle27.body.immovable = true;
        
        //obstacle28 & obstacle29 makes left T*
        this.obstacle28a = this.add.group();
        this.obstacle28a.enableBody = true;
        this.obstacle28a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle28 = this.obstacle28a.create(480, 580, 'bar');
        this.obstacle28.body.immovable = true;
        
        this.obstacle29a = this.add.group();
        this.obstacle29a.enableBody = true;
        this.obstacle29a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle29 = this.obstacle29a.create(400, 620, 'sidebar');
        this.obstacle29.body.immovable = true;
        
        //obstacle30
        this.obstacle30a = this.add.group();
        this.obstacle30a.enableBody = true;
        this.obstacle30a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle30 = this.obstacle30a.create(240, 540, 'sidebar');
        this.obstacle30.body.immovable = true;
        
        //obstacle31
        this.obstacle31a = this.add.group();
        this.obstacle31a.enableBody = true;
        this.obstacle31a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle31 = this.obstacle30a.create(240, 540, 'sidebar');
        this.obstacle30.body.immovable = true;
        
        //obstacle32
        this.obstacle32a = this.add.group();
        this.obstacle32a.enableBody = true;
        this.obstacle32a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle32 = this.obstacle32a.create(240, 540, 'sidebar');
        this.obstacle32.body.immovable = true;
        
        //obstacle33
        this.obstacle33a = this.add.group();
        this.obstacle33a.enableBody = true;
        this.obstacle33a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle33 = this.obstacle33a.create(240, 400, 'sidebar');
        this.obstacle33.body.immovable = true;
        
        //obstacle34
        this.obstacle34a = this.add.group();
        this.obstacle34a.enableBody = true;
        this.obstacle34a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle34 = this.obstacle34a.create(240, 400, 'sidebar');
        this.obstacle34.body.immovable = true;
        
        //obstacle35
        this.obstacle35a = this.add.group();
        this.obstacle35a.enableBody = true;
        this.obstacle35a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle35 = this.obstacle35a.create(240, 400, 'sidebar');
        this.obstacle35.body.immovable = true;
        
        //Top boundary
        this.topbara = this.add.group();
        this.topbara.enableBody = true;
        this.topbara.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.topbar = this.topbara.create(0, 0, 'top bar');
        this.topbar.body.immovable = true;
        
        //Left boundary
        this.leftbara = this.add.group();
        this.leftbara.enableBody = true;
        this.leftbara.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.leftbar = this.leftbara.create(-20, 0, 'left bar');
        this.leftbar.body.immovable = true;
        
        //Bottom boundary
        this.bottombara = this.add.group();
        this.bottombara.enableBody = true;
        this.bottombara.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.bottombar = this.bottombara.create(0, 750, 'top bar');
        this.bottombar.body.immovable = true;
        
        //Right Boundary
        this.rightbara = this.add.group();
        this.rightbara.enableBody = true;
        this.rightbara.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.rightbar = this.rightbara.create(1370, 0, 'left bar');
        this.rightbar.body.immovable = true;
    },
    
    buildCoins: function () {
        this.coins = this.add.group();
        this.coins.enableBody = true;
        this.coins.physicsBodyType = Phaser.Physics.ARCADE;
        
        for(this.i = 0; this.i <= 100; this.i++)
        {
            this.x = Math.floor(Math.random() * (1400 - 65 + 1)) + 65;
            this.y = Math.floor(Math.random() * (90 - 650 + 1)) + 650;
            this.coin = this.coins.create(this.x, this.y, 'coin');
            this.coin.body.immovable = true;
        }
    },
    
    monsterCollision: function () {
        
    },
    
    checkHealth: function () {
        if(this.healthPoints <= 0){
            this.gameover = true;
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
        this.physics.arcade.collide(this.player, this.coins, this.playerHitCoin, null, this);
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
        this.physics.arcade.collide(this.player, this.topbara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.leftbara, this.playderHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.bottombara, this.playerHitObstacle, null, this);
        this.physics.arcade.collide(this.player, this.rightbara, this.playerHitObstacle, null, this);
        

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
                this.physics.arcade.collide(this.player, this.coins, this.playerHitCoin, null, this);
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
                this.physics.arcade.collide(this.player, this.topbara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.leftbara, this.playderHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.bottombara, this.playerHitObstacle, null, this);
                this.physics.arcade.collide(this.player, this.rightbara, this.playerHitObstacle, null, this);
            }
            this.facing = 'idle';
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
        }
    },
    
    playerHitCoin: function (_player, _coin) {
        _coin.kill();
        this.coinsCollected += 1;
        this.score.setText('Coins Collected: ' + this.coinsCollected);
    },
    
    playerHitObstacle: function(_player, _obstacle) {
        
    },
};