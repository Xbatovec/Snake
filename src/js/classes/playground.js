import clearFood from "../functions/playground/clearFood.js";
import generateFood from "../functions/playground/generateFood.js";
export default class Playground {
    constructor() {
        this.width = 15;
        this.foodPoints = [];
        this.clearFood = () => clearFood(this);
        this.generateFood = () => generateFood(this);
    }
}
