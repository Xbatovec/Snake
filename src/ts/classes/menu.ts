import { elId } from "../functions/utilities.js";
import { game, playGround, sound } from "../init.js";

export default class Menu {

    public startGameListener() {
        elId('start-button').addEventListener('click', () => {
            game.start();

            // play sound
            sound.click.play();
        });
    }

    public backToMenuListener() {
        elId('back-button').addEventListener('click', () => this.main());
    }

    public main() {

        game.clearAll();

        playGround.clearAllStats();
        
        elId('death-menu-box').style.display = 'none';
        elId('menu-box').style.display = 'flex';

        // play sound
        sound.click.play();
    }

    public death() {

        elId('death-menu-box').style.display = 'flex';
    }
}