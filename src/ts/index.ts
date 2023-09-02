import { menu, game, player, playGround, sound } from "./init.js";
import { keyDown, resize, responsivity } from "./event.js";

window.addEventListener('load', _ => {
    keyDown();
    resize();
    responsivity();
});

menu.startGameListener();
menu.backToMenuListener();

sound.loopSounds();
sound.music.play();