import start from "../functions/game/start.js";
import loop from "../functions/game/loop.js";
import clearAll from "../functions/game/clearAll.js";
export default class Game {
    constructor() {
        this.start = () => start();
        this.loop = (keyDown = false) => loop(keyDown);
        this.clearAll = (keyDown = false) => clearAll();
    }
}
