MinerTrouble.Preloader = function (game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

MinerTrouble.Preloader.prototype = {
    
    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);
        this.titleText = this.add.image(this.world.centerX, this.world.centerY - 220, 'titleimage');
        this.titleText.anchor.setTo(0.5, 0.5);
        this.load.image('titlescreen', 'Images/Title Logo/Miner Trouble.png');
        this.load.bitmapFont('eightbitwonder', 'Fonts/eightbitwonder.png', 'Fonts/eightbitwonder.fnt');
        this.load.spritesheet('miner', 'Images/Miner/sprite-miner/Miner.png', 15, 30);
        this.load.image('coin', 'Images/Coin/Coin/coin.png');
        this.load.spritesheet('blob', 'Images/blob/sprite-blob/blob.png', 32, 32);
        this.load.spritesheet('pacman', 'Images/Crazy Pacman/sprite-pacman/pacman.png', 32, 32);
        this.load.spritesheet('demon', 'Images/Demon/sprite-demon/demon.png', 32, 32);
        this.load.spritesheet('dirtman', 'Images/Dirtman/sprite-dirtman/dirtman.png', 32, 32);
        this.load.spritesheet('et', 'Images/ET/sprite-et/et.png', 32, 32);
        this.load.spritesheet('flameguy', 'Images/Flameguy/sprite-flameguy/flameguy.png', 32, 32);
        this.load.spritesheet('miniblob', 'Images/Mini Blob/sprite-miniblob/mini_blob.png', 32, 32);
        this.load.spritesheet('shadowman', 'Images/Shadow Man/sprite-shadowman/shadowman.png', 32, 32);
        this.load.spritesheet('worm', 'Images/Worm/sprite-worm/worm.png', 32, 32);
        this.load.image('level', 'Images/Level/level background.png');
        this.load.image('bar', 'Images/Level/bar.png');
        this.load.image('sidebar', 'Images/Level/sideways bar.png');
        this.load.image('left bar', 'Images/Level/left bar.png');
        this.load.image('top bar', 'Images/Level/top bar.png');
        this.load.audio('coincollection', 'Sounds/coincollection.wav');
    },
    
    create: function () {
        this.preloadBar.cropEnabled = false;
    },
    
    update: function () {
        this.ready = true;
        this.state.start('StartMenu');
    }
}