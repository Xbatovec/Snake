import start from "../functions/game/start.js";
import loop from "../functions/game/loop.js";
import clearAll from "../functions/game/clearAll.js";

export default class Game {
    private time: number = 0;

    public start = (): Promise<void> => start();

    public loop = (keyDown: boolean = false): void => loop(keyDown);

    public clearAll = (keyDown: boolean = false): void => clearAll();

    public timeGetter(): number {return this.time;}
    public timeSetter(time: number): void {this.time = time;}
    public timeAdd(time: number): void {this.time += time;}
}