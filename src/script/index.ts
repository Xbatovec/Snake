interface Position {
    x: number;
    y: number;
}

interface Stomach {
    good: boolean;
    neutral: boolean;
    bad: boolean;
}

class Player {
    private speed: number;
    private direction: string;
    private activePoints: Position[] = [];
    public isDead: boolean = true;
    public stomach: Stomach = {good: true, neutral: true, bad: true};

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

    public addSpeed(speed: number): void {
        this.speed += speed;
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
        return this.activePoints;
    }

    public pushActivePoint(activePoint: Position): void {
        this.activePoints.push(activePoint);
    }

    public shiftActivePoint(): void {
        this.activePoints.shift();
    }

    public clearStomach(): void {
        this.stomach = {good: false, neutral: false, bad: false};
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
        checkFood({x: finalX, y: finalY});
    }
}

class Playground {
    public width: number = 15;
    private foodPoints: number[] = [];

    public clearFood(): void {

        // return if player didn't eat
        if (!(player.stomach.good || player.stomach.neutral || player.stomach.bad)) return;

        // loop through every food point
        for (let i = 0; i < this.foodPoints.length; i++) {

            const index = this.foodPoints[i];
            
            const classList = getClassList(index);

            const goodFood = classList.contains('good-food-item');
            const neutralFood = classList.contains('neutral-food-item');
            const badFood = classList.contains('bad-food-item');

            let foodName: string;

            switch (true) {
                case goodFood: foodName = 'good'; break;
                case neutralFood: foodName = 'neutral'; break;
                case badFood:  foodName = 'bad'; break;
            }

            getClassList(index).remove(`${foodName}-food-item`);
        }

        this.foodPoints = [];
    }

    public generateFood(): void {

        // return if player didn't eat
        if (!(player.stomach.good || player.stomach.neutral || player.stomach.bad)) return;

        const width = this.width;

        // substract snake items from all items = avaible items for food
        const allItems = Array.from({ length: width*width }, (_, index) => index);
        const snakeItems: number[] = player.getActivePoints().map(item => posToIndex(item));
        const avaibleItems = allItems.filter(item => !snakeItems.includes(item));
        
        // generate 2 random indexes of new food
        const randomItems: number[] = [];
        for (let i = 0; i < 2; i++) randomItems.push(avaibleItems[rng(0, avaibleItems.length-1)]);

        // change the second index if its value is the same as the value of the first index
        if (randomItems[0] === randomItems[1]) randomItems[1] = Math.ceil(randomItems[1] / (rng(11, 100) / 10)) + rng(1, 20);

        // generate random food type (good, neutral, bad)
        let randomTypes: string[] = [];
        const randomNumber = rng(1, 100);

        switch (true) {
            // bad & bad (4 % chance)
            case randomNumber <= 4 + 0: randomTypes = ['bad', 'bad']; break;
    
            // good & bad (5 % chance)
            case randomNumber <= 5 + 4: randomTypes = ['good', 'bad']; break;
    
            // good & good (6 % chance)
            case randomNumber <= 6 + 9: randomTypes = ['good', 'good']; break;
    
            // good & neutral (10 % chance)
            case randomNumber <= 10 + 15: randomTypes = ['good', 'neutral']; break;
    
            // neutral & bad (25 % chance)
            case randomNumber <= 25 + 25: randomTypes = ['neutral', 'bad']; break;
    
            // neutral & neutral (50 % chance)
            case randomNumber <= 50 + 50: randomTypes = ['neutral', 'neutral']; break;
        }

        // generate food & add it in foodPoints
        for (let i = 0; i < 2; i++) {
            getClassList(randomItems[i]).add(`${randomTypes[i]}-food-item`);
            this.foodPoints.push(randomItems[i]);
        }
    }
}

const player = new Player({x: 8, y: 8}, 1, 'right');
const playGround  = new Playground();
let loopTimeout: NodeJS.Timeout;

function loop(keyDown: boolean = false) {

    if (keyDown) clearTimeout(loopTimeout);

    player.move();

    if (player.isDead) {
        console.log('You died');
        return;
    }

    moveHead();
    removeTail();

    playGround.clearFood();
    playGround.generateFood();

    player.clearStomach();
    
    loopTimeout = setTimeout(() => loop(), speedFormula());
}