import clearFood from "../functions/playground/clearFood.js";
import generateFood from "../functions/playground/generateFood.js";

export default class Playground {
    public width: number = 15;
    private foodPoints: number[] = [];

    public clearFood = (): void => clearFood(this);

    public generateFood = (): void => generateFood(this);
}