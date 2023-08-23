import { menu, game, player, playGround } from "./init.js";
import { keyDown, resize, responsivity } from "./event.js";

window.addEventListener('load', _ => {
    keyDown();
    resize();
    responsivity();
});

menu.startGameListener();
menu.backToMenuListener();