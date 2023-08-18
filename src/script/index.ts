interface Position {
    x: number;
    y: number;
}

class Player {
    private speed: number;
    private direction: string;
    private activePoints: Position[] = [];
    public isDead: boolean = true;

    public constructor(pos: Position, speed: number, direction: string) {
        this.speed = speed;
        this.direction = direction;
        this.activePoints = [{x: pos.x, y: pos.y-3}, {x: pos.x, y: pos.y-2}, {x: pos.x, y: pos.y-1}, {x: pos.x, y: pos.y}];
    }

    public getPos(): Position {
        return this.activePoints[this.activePoints.length-1];
    }

    public getSpeed(): number {
        return this.speed;
    }

    public setSpeed(speed: number): void {
        this.speed = speed;
    }

    public getDirection(): string {
        return this.direction;
    }

    public setDirection(direction: string): void {
        this.direction = direction;
    }

    public getLength(): number {
        return this.activePoints.length;
    }

    public getActivePoints(): Position[] {
        return {...this.activePoints};
    }

    public pushActivePoint(activePoint: Position): void {
        this.activePoints.push(activePoint);
    }

    public shiftActivePoint(): void {
        this.activePoints.shift();
    }

    public move(): void {
        const moveObject: Position = {x: 0, y: 0};
        const snakeHead: Position = this.activePoints[this.activePoints.length-1];

        switch (this.direction) {
            case 'up': moveObject.y = -1; break;
            case 'down': moveObject.y = 1; break;
            case 'left': moveObject.x = -1; break;
            case 'right': moveObject.x = 1; break;
        }

        const finalX = snakeHead.x + moveObject.x;
        const finalY = snakeHead.y + moveObject.y;

        this.activePoints.push({
            x: finalX,
            y: finalY
        });

        checkDeath({x: finalX, y: finalY});
    }
}

const player = new Player({x: 8, y: 8}, 1, 'right');
let loopTimeout: NodeJS.Timeout;

function loop(keyDown: boolean = false) {

    if (keyDown) clearTimeout(loopTimeout);

    player.move();

    if (player.isDead) {
        console.log('You died');
        return;
    }

    render();
    
    loopTimeout = setTimeout(() => loop(), 400);
}