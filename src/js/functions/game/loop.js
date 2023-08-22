import { player, playGround } from "../../init.js";
import { speedFormula } from "../utilities.js";
let loopTimeout;
export default function loop(keyDown = false) {
    if (keyDown)
        clearTimeout(loopTimeout);
    player.move();
    if (player.isDead) {
        console.log('You died');
        return;
    }
    player.moveHead();
    player.eatingConsequences();
    playGround.clearFood();
    playGround.generateFood();
    player.clearStomach();
    loopTimeout = setTimeout(() => loop(), speedFormula());
}
