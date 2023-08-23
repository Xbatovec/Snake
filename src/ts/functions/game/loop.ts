import { menu, player, playGround } from "../../init.js";
import { speedFormula } from "../utilities.js";

let loopTimeout: NodeJS.Timeout;

export default function loop(keyDown: boolean = false) {

    if (keyDown) clearTimeout(loopTimeout);

    player.move();

    if (player.isDead) {
        console.log('You died');
        playGround.clearTimer();
        menu.death();
        return;
    }

    player.moveHead();
    player.eatingConsequences();

    playGround.clearFood();
    playGround.generateFood();

    player.clearStomach();

    playGround.statistics();
    
    loopTimeout = setTimeout(() => loop(), speedFormula());
}