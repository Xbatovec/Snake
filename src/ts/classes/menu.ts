import { elId } from "../functions/utilities.js";
import { game } from "../init.js";

export default class Menu {

    public startGameListener() {
        elId('start-button').addEventListener('click', () => game.start());
    }

    public backToMenuListener() {
        elId('back-button').addEventListener('click', () => this.main());
    }

    public main() {

        game.clearAll();
        
        elId('death-menu-box').style.display = 'none';
        elId('menu-box').style.display = 'flex';
    }

    public death() {

        elId('death-menu-box').style.display = 'flex';
    }
}