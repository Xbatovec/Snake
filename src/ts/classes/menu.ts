import { elId } from "../functions/utilities.js";
import { game } from "../init.js";

export default class Menu {

    public startGameListener() {
        elId('start-button').addEventListener('click', () => game.start());
    }
}