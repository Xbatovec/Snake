export default class Sound {
    constructor() {
        this.music = new Audio("sound/music.mp3");
        this.click = new Audio("sound/click.mp3");
        this.getFood1 = new Audio("sound/getFood.mp3");
        this.getFood2 = new Audio("sound/getFood.mp3");
    }
    loopSounds() {
        this.music.loop = true;
    }
}
