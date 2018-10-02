AFRAME.registerComponent('vidhandler',{

    init: function() {
        this.video = document.querySelector("#video-src");
    },
    tick: function() {
        if(!document.querySelector('#marker').object3D.visible && this.playing) {
            this.video.pause();
            this.playing=false;
        }
        else if (document.querySelector('#marker').object3D.visible && !this.playing) {
            this.video.play();
            this.playing = true;
        }
    }


});