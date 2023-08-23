import { game, playGround, player } from "../../init.js";
import { posToIndex, getClassList, elId, wait } from "../utilities.js";

export default async function start() {

    elId('menu-box').style.display = 'none';
    await startCounter();    

    const snakeHead = posToIndex(player.getPos());
    const activePoints = player.getActivePoints();

    getClassList(snakeHead).add('snake-head-item');
    for (let i = 0; i < player.getLength() - 1; i++) getClassList(posToIndex(activePoints[i])).add('snake-item');

    player.stomach = {good: true, neutral: true, bad: true};
    playGround.generateFood();
    player.clearStomach();

    player.isDead = false;

    playGround.timer();
    
    game.loop();
}

async function startCounter() {

    elId('start-counter-box').style.display = 'flex';
    elId('start-counter').innerHTML = '3';  
    await wait(750);
    elId('start-counter').innerHTML = '2';
    await wait(750);
    elId('start-counter').innerHTML = '1';
    await wait(750);
    elId('start-counter').innerHTML = 'Go!';
    await wait(750);
    elId('start-counter-box').style.display = 'none';
}