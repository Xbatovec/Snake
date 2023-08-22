import start from "../functions/game/start.js";
import loop from "../functions/game/loop.js";

export default class Game {

    public start = (): Promise<void> => start();

    public loop = (keyDown: boolean = false): void => loop(keyDown);
}