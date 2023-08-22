import Position from "../../types/position.js";
import { playGround } from "../../init.js";
import { getClassList, posToIndex } from "../utilities.js";

export default function checkDeath(player, pos: Position) {

    const isInWall = (pos.x < 1 || pos.x > playGround.width || pos.y < 1 || pos.y > playGround.width);
    if (isInWall) {
        player.isDead = true;
        return;
    }

    const posElmnt = getClassList(posToIndex(player.getPos()));
    player.isDead = posElmnt.contains('snake-item');
}