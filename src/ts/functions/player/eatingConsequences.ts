import { sound } from "../../init.js";
import { posToIndex, getClassList } from "../utilities.js";

const eatSound = () => {
    // play sound
    if (!sound.getFood1.paused) sound.getFood2.play();
    else if (!sound.getFood2.paused) sound.getFood1.play();
    else sound.getFood1.play();
}

export default function eatingConsequences(player): void {

    const snakeTail = posToIndex(player.getActivePoints()[0]);
    
    switch (true) {
        case player.stomach.good:
            eatSound();
            break;

        case player.stomach.neutral:
            player.addSpeed(1);
            eatSound();
            break;

        case player.stomach.bad:
            player.addSpeed(1);
            player.shiftActivePoint();
            getClassList(snakeTail).remove('snake-item');
            eatSound();
            break;

        default:
            player.shiftActivePoint();
            getClassList(snakeTail).remove('snake-item');
            break;
    }
}