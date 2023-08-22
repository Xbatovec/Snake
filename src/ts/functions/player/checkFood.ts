import Position from "../../types/position.js";
import { getClassList, posToIndex } from "../utilities.js";

export default function checkFood(player, pos: Position) {
        
    if (player.isDead) return;

    const classList = getClassList(posToIndex(pos));

    const goodFood = classList.contains('good-food-item');
    const neutralFood = classList.contains('neutral-food-item');
    const badFood = classList.contains('bad-food-item');

    player.stomach = {good: goodFood, neutral: neutralFood, bad: badFood};
}