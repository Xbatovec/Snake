import start from "../functions/game/start.js";
import loop from "../functions/game/loop.js";
export default class Game {
    constructor() {
        this.start = () => start();
        this.loop = (keyDown = false) => loop(keyDown);
    }
}
