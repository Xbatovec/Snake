import { elId } from "../functions/utilities.js";
import { game, playGround, sound } from "../init.js";
export default class Menu {
    startGameListener() {
        elId('start-button').addEventListener('click', () => {
            game.start();
            // play sound
            sound.click.play();
        });
    }
    backToMenuListener() {
        elId('back-button').addEventListener('click', () => this.main());
    }
    main() {
        game.clearAll();
        playGround.clearAllStats();
        elId('death-menu-box').style.display = 'none';
        elId('menu-box').style.display = 'flex';
        // play sound
        sound.click.play();
    }
    death() {
        elId('death-menu-box').style.display = 'flex';
    }
}
