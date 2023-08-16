class Player {
    private length: number;
    private pos: object;
    private speed: number;
    private direction: string;

    public constructor(length: number, pos: object, speed: number, direction: string) {
        this.length = length;
        this.pos = pos;
        this.speed = speed;
        this.direction = direction;
    }

    public getLength(): number {
        return this.length;
    }

    public setLength(length: number): void {
        this.length = length;
    }

    public getPos(): object {
        return this.pos;
    }

    public setPos(pos: object): void {
        this.pos = pos;
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
}

const player = new Player(1, {x: 6, y: 6}, 1, 'down');

function loop() {

    let length = player.getLength();
    let pos = player.getPos();
    let speed = player.getSpeed();
    const direction = player.getDirection();

    setTimeout(() => loop(), 1000);
}