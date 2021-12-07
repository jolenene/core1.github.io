window.addEventListener("load", function() {
    window.root = this;

    root.AudioPlayer = function(props)
    {
        this.target = props.target;
        this.soundLinkage = props.soundLinkage;
        this.playProps = props.playProps;
        this.target.on("click", this.onClick, this);
    };
    
    root.AudioPlayer.prototype.onClick = function(e)
    {	
        if (this.target.playPauseButton.contains(e.target))
            this.toggle();
        else if (this.target.stopButton.contains(e.target))
            this.stop();
    };
    
    root.AudioPlayer.prototype.toggle = function()
    {
        this.target.playPauseButton.gotoAndStop(this.target.playPauseButton.currentFrame + 1);
            
        if (this.target.playPauseButton.currentFrame === 0)
        {
            if (this.sound)
                this.sound.paused = true;
        }
        else
        {
            if (this.sound)
                this.sound.paused = false;
            else
                this.sound = createjs.Sound.play(this.soundLinkage, this.playProps);
        }
    };
    
    root.AudioPlayer.prototype.stop = function()
    {
        if (this.sound)
        {
            this.sound.stop();
            this.sound = null;
            this.target.playPauseButton.gotoAndStop(0);
        }
    };
    
    root.main = function()
    {
        document.body.style.backgroundColor = lib.properties.color;
        createjs.Touch.enable(stage);
        
        root.audioPlayer0 = new root.AudioPlayer({ target: root.player0, soundLinkage: "Song0", playProps: { volume: 0.1 } });
        root.audioPlayer1 = new root.AudioPlayer({ target: root.player1, soundLinkage: "Song1" });
        root.audioPlayer2 = new root.AudioPlayer({ target: root.player2, soundLinkage: "Song2" });
    };
    
    root.main();
     
});