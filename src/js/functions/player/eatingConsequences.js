import { posToIndex, getClassList } from "../utilities.js";
export default function eatingConsequences(player) {
    const snakeTail = posToIndex(player.getActivePoints()[0]);
    switch (true) {
        case player.stomach.good: break;
        case player.stomach.neutral:
            player.addSpeed(1);
            break;
        case player.stomach.bad:
            player.addSpeed(1);
            player.shiftActivePoint();
            getClassList(snakeTail).remove('snake-item');
            break;
        default:
            player.shiftActivePoint();
            getClassList(snakeTail).remove('snake-item');
            break;
    }
}
