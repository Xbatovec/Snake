import { posToIndex, getClassList } from "../utilities.js";

export default function moveHead(player) {
    
    const snakeHead = posToIndex(player.getPos());
    const snakeNeck = posToIndex(player.getActivePoints()[player.getLength() - 2]);
    
    getClassList(snakeHead).add('snake-head-item');

    getClassList(snakeNeck).remove('snake-head-item');
    getClassList(snakeNeck).add('snake-item');
}