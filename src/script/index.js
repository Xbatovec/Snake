var Player = /** @class */ (function () {
    function Player(length, pos, speed) {
        this.length = length;
        this.pos = pos;
        this.speed = speed;
    }
    Player.prototype.getLength = function () {
        return this.length;
    };
    Player.prototype.getPos = function () {
        return this.pos;
    };
    Player.prototype.getSpeed = function () {
        return this.speed;
    };
    Player.prototype.setLength = function (length) {
        this.length = length;
    };
    Player.prototype.setPos = function (pos) {
        this.pos = pos;
    };
    Player.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    return Player;
}());
var player = new Player(1, { x: 6, y: 6 }, 1);
console.log('Hello!', player.getLength());
player.setLength(32);
console.log('Hello!', player.getLength());
