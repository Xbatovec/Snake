import { player } from "../../init.js";
import { getClassList } from "../utilities.js";

export default function clearFood(playGround): void {

    // return if player didn't eat
    if (!(player.stomach.good || player.stomach.neutral || player.stomach.bad)) return;

    // loop through every food point
    for (let i = 0; i < playGround.foodPoints.length; i++) {

        const index = playGround.foodPoints[i];
        
        const classList = getClassList(index);

        const goodFood = classList.contains('good-food-item');
        const neutralFood = classList.contains('neutral-food-item');
        const badFood = classList.contains('bad-food-item');

        let foodName: string;

        switch (true) {
            case goodFood: foodName = 'good'; break;
            case neutralFood: foodName = 'neutral'; break;
            case badFood:  foodName = 'bad'; break;
        }

        getClassList(index).remove(`${foodName}-food-item`);
    }

    playGround.foodPoints = [];
}