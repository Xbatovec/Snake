import { elId } from "../functions/utilities.js";
import { game, playGround } from "../init.js";
export default class Menu {
    startGameListener() {
        elId('start-button').addEventListener('click', () => game.start());
    }
    backToMenuListener() {
        elId('back-button').addEventListener('click', () => this.main());
    }
    main() {
        game.clearAll();
        playGround.clearAllStats();
        elId('death-menu-box').style.display = 'none';
        elId('menu-box').style.display = 'flex';
    }
    death() {
        elId('death-menu-box').style.display = 'flex';
    }
}
