import { playGround, player } from "../../init.js";
import { elClass, posToIndex, getClassList } from "../utilities.js";

export default function clearAll() {

    const snakeItems: number[] = player.getActivePoints().map(item => posToIndex(item));
    for (let i = 0; i < snakeItems.length; i++) {
        if (!(snakeItems[i] >= 0 && snakeItems[i] < 15*15)) continue;
        const snakeItemClassList = getClassList(snakeItems[i]);
        snakeItemClassList.remove('snake-head-item');
        snakeItemClassList.remove('snake-item');
        
    }

    player.stomach = {good: true, neutral: true, bad: true};
    playGround.clearFood();

    player.setSpeed(1);
    player.setDirection('down');
    player.setActivePoints([{x: 8, y: 5}, {x: 8, y: 6}, {x: 8, y: 7}, {x: 8, y: 8}]);
    player.clearStomach();
}