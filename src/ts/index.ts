import { menu, game, player, playGround } from "./init.js";
import { keyDown, resize, responsivity } from "./event.js";

keyDown();
resize();
responsivity();

menu.startGameListener();