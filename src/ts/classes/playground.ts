import clearFood from "../functions/playground/clearFood.js";
import generateFood from "../functions/playground/generateFood.js";
import statistics from "../functions/playground/statistics.js";
import timer from "../functions/playground/timer.js";
import { elId } from "../functions/utilities.js";
import { game } from "../init.js";

export default class Playground {
    public width: number = 15;
    private foodPoints: number[] = [];
    private timerTimeout: NodeJS.Timeout;

    public clearFood = (): void => clearFood(this);

    public generateFood = (): void => generateFood(this);

    public statistics = (): void => statistics();

    public timer = (): void => timer(this);

    public clearTimer(): void {
        game.timeSetter(0);
        clearTimeout(this.timerTimeout);
    }

    public clearAllStats(): void {

        elId('length-stats').innerHTML = '4';
        elId('time-stats').innerHTML = '00:00:00';
        elId('speed-stats').innerHTML = '3.4<span>t/s</span>';
    }
}