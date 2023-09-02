import { player } from "../../init.js";
import { posToIndex, getClassList, rng } from "../utilities.js";

export default function generateFood(playGround): void {

    // return if player didn't eat
    if (!(player.stomach.good || player.stomach.neutral || player.stomach.bad)) return;

    const width = playGround.width;

    // substract snake items from all items = avaible items for food
    const allItems = Array.from({ length: width*width }, (_, index) => index);
    const snakeItems: number[] = player.getActivePoints().map(item => posToIndex(item));
    const avaibleItems = allItems.filter(item => !snakeItems.includes(item));
    
    // generate 2 random indexes of new food
    const randomItems: number[] = [];
    for (let i = 0; i < 2; i++) randomItems.push(avaibleItems[rng(0, avaibleItems.length-1)]);

    // change the second index if its value is the same as the value of the first index
    if (randomItems[0] === randomItems[1]) randomItems[1] = Math.ceil(randomItems[1] / (rng(11, 100) / 10)) + rng(1, 20);

    // generate random food type (good, neutral, bad)
    let randomTypes: string[] = [];
    const randomNumber = rng(1, 100);

    switch (true) {
        // bad & bad (4 % chance)
        case randomNumber <= 4 + 0: randomTypes = ['bad', 'bad']; break;

        // good & bad (5 % chance)
        case randomNumber <= 5 + 4: randomTypes = ['good', 'bad']; break;

        // good & good (6 % chance)
        case randomNumber <= 6 + 9: randomTypes = ['good', 'good']; break;

        // good & neutral (10 % chance)
        case randomNumber <= 10 + 15: randomTypes = ['good', 'neutral']; break;

        // neutral & bad (25 % chance)
        case randomNumber <= 25 + 25: randomTypes = ['neutral', 'bad']; break;

        // neutral & neutral (50 % chance)
        case randomNumber <= 50 + 50: randomTypes = ['neutral', 'neutral']; break;
    }

    // generate food & add it in foodPoints
    for (let i = 0; i < 2; i++) {
        getClassList(randomItems[i]).add(`${randomTypes[i]}-food-item`);
        playGround.foodPoints.push(randomItems[i]);
    }
}