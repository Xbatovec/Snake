import Position from "../types/position";
import Stomach from "../types/stomach";
import move from "../functions/player/move.js";
import moveHead from "../functions/player/moveHead.js";
import eatingConsequences from "../functions/player/eatingConsequences.js";
import checkDeath from "../functions/player/checkDeath.js";
import checkFood from "../functions/player/checkFood.js";

export default class Player {
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

    public getPos(): Position {return this.activePoints[this.activePoints.length-1];}

    public getSpeed(): number {return this.speed;}
    public setSpeed(speed: number): void {this.speed = speed;}
    public addSpeed(speed: number): void {this.speed += speed;}

    public getDirection(): string {return this.direction;}
    public setDirection(direction: string): void {this.direction = direction;}

    public getLength(): number {return this.activePoints.length;}

    public getActivePoints(): Position[] {return this.activePoints;}
    public setActivePoints(activePoint: Position[]): void {this.activePoints = activePoint}
    public pushActivePoint(activePoint: Position): void {this.activePoints.push(activePoint);}
    public shiftActivePoint(): void {this.activePoints.shift();}

    public clearStomach(): void {this.stomach = {good: false, neutral: false, bad: false};}
   
    private checkDeath = (pos: Position): void => checkDeath(this, pos);

    private checkFood = (pos: Position): void => checkFood(this, pos);

    public moveHead = (): void => moveHead(this);

    public eatingConsequences = (): void => eatingConsequences(this);

    public move = (): void => move(this);
}