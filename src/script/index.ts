class Player {
    private length: number;
    private pos: object;
    private speed: number;

    public constructor(length: number, pos: object, speed: number) {
        this.length = length;
        this.pos = pos;
        this.speed = speed;
    }

    public getLength(): number {
        return this.length;
    }

    public getPos(): object {
        return this.pos;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public setLength(length: number): void {
        this.length = length;
    }

    public setPos(pos: object): void {
        this.pos = pos;
    }

    public setSpeed(speed: number): void {
        this.speed = speed;
    }
}

const player = new Player(1, {x: 6, y: 6}, 1);

console.log('Hello!', player.getLength());
player.setLength(32);
console.log('Hello!', player.getLength());
