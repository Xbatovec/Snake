import { game } from "../../init.js";
import { elId } from "../utilities.js";

export default function timer(playGround) {

    const timeElmnt = elId('time-stats');
    let time = game.timeGetter();

    const hours = Math.floor(time / 3600);
    time -= hours * 3600;

    const mins = Math.floor(time / 60);
    time -= mins * 60;

    const secs = time;

    const stringHours = hours.toString().length > 1 ? hours.toString() : '0' + hours.toString();
    const stringMins = mins.toString().length > 1 ? mins.toString() : '0' + mins.toString();
    const stringSecs = secs.toString().length > 1 ? secs.toString() : '0' + secs.toString();

    timeElmnt.innerHTML = `${stringHours}:${stringMins}:${stringSecs}`;

    game.timeAdd(1);
    playGround.timerTimeout = setTimeout(() => timer(playGround), 1000);
}