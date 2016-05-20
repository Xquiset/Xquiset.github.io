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
        //this.buildCoins();
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
        this.player.events.onOutOfBounds
    },
    
    buildLevel: function () {
        //obstacle1
        this.obstacle1a = this.add.group();
        this.obstacle1a.enableBody = true;
        this.obstacle1a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle1 = this.obstacle1a.create(80, 80, 'rightT');
        this.obstacle1.body.immovable = true;
        
        //obstacle2
        this.obstacle2a = this.add.group();
        this.obstacle2a.enableBody = true;
        this.obstacle2a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle2 = this.obstacle2a.create(400, 80, 'leftT');
        this.obstacle2.body.immovable = true;
        
        //obstacle3
        this.obstacle3a = this.add.group();
        this.obstacle3a.enableBody = true;
        this.obstacle3a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle3 = this.obstacle3a.create(240, 200, 'sidebar');
        this.obstacle3.body.immovable = true;
        
        //obstacle4
        this.obstacle4a = this.add.group();
        this.obstacle4a.enableBody = true;
        this.obstacle4a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle4 = this.obstacle4a.create(450, 320, 'bar');
        this.obstacle4.body.immovable = true;
        
        //obstacle5
        this.obstacle5a = this.add.group();
        this.obstacle5a.enableBody = true;
        this.obstacle5a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle5 = this.obstacle5a.create(40, 320, 'bar');
        this.obstacle5.body.immovable = true;
        
        //obstacle6
        this.obstacle6a = this.add.group();
        this.obstacle6a.enableBody = true;
        this.obstacle6a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle6 = this.obstacle6a.create(240, 320, 'bar');
        this.obstacle6.body.immovable = true;
        
        //obstacle7
        this.obstacle7a = this.add.group();
        this.obstacle7a.enableBody = true;
        this.obstacle7a.physicsBodyType = Phaser.Physics.ARCADE;
        
        this.obstacle7 = this.obstacle7a.create(240, 80, 'bar');
        this.obstacle7.body.immovable = true;
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
        this.physics.arcade.collide(this.player, this.obstacle1a, this.playerHitObstacle1, null, this);
        this.physics.arcade.collide(this.player, this.obstacle2a, this.playerHitObstacle2, null, this);
        this.physics.arcade.collide(this.player, this.obstacle3a, this.playerHitObstacle3, null, this);
        this.physics.arcade.collide(this.player, this.obstacle4a, this.playerHitObstacle4, null, this);
        this.physics.arcade.collide(this.player, this.obstacle5a, this.playerHitObstacle5, null, this);
        this.physics.arcade.collide(this.player, this.obstacle6a, this.playerHitObstacle6, null, this);
        this.physics.arcade.collide(this.player, this.obstacle7a, this.playerHitObstacle7, null, this);
        

        if (this.cursor.left.isDown)
        {
            this.player.body.velocity.x = -150;
        }
        else if (this.cursor.right.isDown)
        {
            this.player.body.velocity.x = 150;
        }
        else if (this.cursor.down.isDown)
        {
            this.player.body.velocity.y = 150;
        }
        else if (this.cursor.up.isDown)
        {
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
                this.physics.arcade.collide(this.player, this.obstacle1a, this.playerHitObstacle1, null, this);
                this.physics.arcade.collide(this.player, this.obstacle2a, this.playerHitObstacle2, null, this);
                this.physics.arcade.collide(this.player, this.obstacle3a, this.playerHitObstacle3, null, this);
                this.physics.arcade.collide(this.player, this.obstacle4a, this.playerHitObstacle4, null, this);
                this.physics.arcade.collide(this.player, this.obstacle5a, this.playerHitObstacle5, null, this);
                this.physics.arcade.collide(this.player, this.obstacle6a, this.playerHitObstacle6, null, this);
                this.physics.arcade.collide(this.player, this.obstacle7a, this.playerHitObstacle7, null, this);
            }
            this.facing = 'idle';
            this.player.body.velocity.y = 0;
        }
    },
    
    playerHitCoin: function (_player, _coin) {
        _coin.kill();
        this.coinsCollected += 1;
        this.score.setText('Coins Collected: ' + this.coinsCollected);
    },
    
    playerHitObstacle1: function(_player, _obstacle) {
    },
    
    playerHitObstacle2: function(_player, _obstacle) {
    },
    
    playerHitObstacle3: function(_player, _obstacle) {
    },
    
    playerHitObstacle4: function(_player, _obstacle) {
    },
    
    playerHitObstacle5: function(_player, _obstacle) {
    },
    
    playerHitObstacle6: function(_player, _obstacle) {
    },
    
    playerHitObstacle7: function(_player, _obstacle) {
    },
};