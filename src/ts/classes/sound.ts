export default class Sound {
    readonly music = new Audio("sound/music.mp3");
    readonly click = new Audio("sound/click.mp3");
    readonly getFood1 = new Audio("sound/getFood.mp3");
    readonly getFood2 = new Audio("sound/getFood.mp3");

    public loopSounds() {
        this.music.loop = true;
    }    
}