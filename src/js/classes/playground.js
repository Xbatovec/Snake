import clearFood from "../functions/playground/clearFood.js";
import generateFood from "../functions/playground/generateFood.js";
import statistics from "../functions/playground/statistics.js";
import timer from "../functions/playground/timer.js";
import { elId } from "../functions/utilities.js";
import { game } from "../init.js";
export default class Playground {
    constructor() {
        this.width = 15;
        this.foodPoints = [];
        this.clearFood = () => clearFood(this);
        this.generateFood = () => generateFood(this);
        this.statistics = () => statistics();
        this.timer = () => timer(this);
    }
    clearTimer() {
        game.timeSetter(0);
        clearTimeout(this.timerTimeout);
    }
    clearAllStats() {
        elId('length-stats').innerHTML = '4';
        elId('time-stats').innerHTML = '00:00:00';
        elId('speed-stats').innerHTML = '3.4<span>t/s</span>';
    }
}
