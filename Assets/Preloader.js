MinerTrouble.Preloader = function (game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

MinerTrouble.Preloader.prototype = {
    
    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);
        this.titleText = this.add.image(this.world.centerX, this.world.centerY - 220, 'titleimage');
        this.titleText.anchor.setTo(0.5, 0.5);
        this.load.image('titlescreen', 'Images/Title Logo/image.png');
        this.load.bitmapFont('eightbitwonder', 'Fonts/eightbitwonder.png', 'Fonts/eightbitwonder.fnt');
        this.load.image('level', 'Images/Level/Level 1 Idea.png');
    },
    
    create: function () {
        this.preloadBar.cropEnabled = false;
    },
    
    update: function () {
        this.ready = true;
        this.state.start('StartMenu');
        if(this.cache.isSoundDecoded('game_audio') && this.reay == false){
            this.ready = true;
            this.state.start('StartMenu');
        }
    }
}