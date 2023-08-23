import move from "../functions/player/move.js";
import moveHead from "../functions/player/moveHead.js";
import eatingConsequences from "../functions/player/eatingConsequences.js";
import checkDeath from "../functions/player/checkDeath.js";
import checkFood from "../functions/player/checkFood.js";
export default class Player {
    constructor(pos, speed, direction) {
        this.activePoints = [];
        this.isDead = true;
        this.stomach = { good: true, neutral: true, bad: true };
        this.checkDeath = (pos) => checkDeath(this, pos);
        this.checkFood = (pos) => checkFood(this, pos);
        this.moveHead = () => moveHead(this);
        this.eatingConsequences = () => eatingConsequences(this);
        this.move = () => move(this);
        this.speed = speed;
        this.direction = direction;
        this.activePoints = [{ x: pos.x, y: pos.y - 3 }, { x: pos.x, y: pos.y - 2 }, { x: pos.x, y: pos.y - 1 }, { x: pos.x, y: pos.y }];
    }
    getPos() { return this.activePoints[this.activePoints.length - 1]; }
    getSpeed() { return this.speed; }
    setSpeed(speed) { this.speed = speed; }
    addSpeed(speed) { this.speed += speed; }
    getDirection() { return this.direction; }
    setDirection(direction) { this.direction = direction; }
    getLength() { return this.activePoints.length; }
    getActivePoints() { return this.activePoints; }
    setActivePoints(activePoint) { this.activePoints = activePoint; }
    pushActivePoint(activePoint) { this.activePoints.push(activePoint); }
    shiftActivePoint() { this.activePoints.shift(); }
    clearStomach() { this.stomach = { good: false, neutral: false, bad: false }; }
}
