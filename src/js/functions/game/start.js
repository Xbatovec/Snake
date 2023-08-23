var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { game, playGround, player } from "../../init.js";
import { posToIndex, getClassList, elId, wait } from "../utilities.js";
export default function start() {
    return __awaiter(this, void 0, void 0, function* () {
        elId('menu-box').style.display = 'none';
        yield startCounter();
        const snakeHead = posToIndex(player.getPos());
        const activePoints = player.getActivePoints();
        getClassList(snakeHead).add('snake-head-item');
        for (let i = 0; i < player.getLength() - 1; i++)
            getClassList(posToIndex(activePoints[i])).add('snake-item');
        player.stomach = { good: true, neutral: true, bad: true };
        playGround.generateFood();
        player.clearStomach();
        player.isDead = false;
        game.loop();
    });
}
function startCounter() {
    return __awaiter(this, void 0, void 0, function* () {
        elId('start-counter-box').style.display = 'flex';
        elId('start-counter').innerHTML = '3';
        yield wait(750);
        elId('start-counter').innerHTML = '2';
        yield wait(750);
        elId('start-counter').innerHTML = '1';
        yield wait(750);
        elId('start-counter').innerHTML = 'Go!';
        yield wait(750);
        elId('start-counter-box').style.display = 'none';
    });
}
