import Position from "../../types/position.js";

export default function move(player): void {
    const moveObject: Position = {x: 0, y: 0};
    const snakeHead: Position = player.activePoints[player.activePoints.length-1];

    switch (player.direction) {
        case 'up': moveObject.y = -1; break;
        case 'down': moveObject.y = 1; break;
        case 'left': moveObject.x = -1; break;
        case 'right': moveObject.x = 1; break;
    }

    const finalX = snakeHead.x + moveObject.x;
    const finalY = snakeHead.y + moveObject.y;

    player.activePoints.push({
        x: finalX,
        y: finalY
    });

    player.checkDeath({x: finalX, y: finalY});
    player.checkFood({x: finalX, y: finalY});
}