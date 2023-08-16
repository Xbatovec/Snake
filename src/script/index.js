var Player = /** @class */ (function () {
    function Player(length, pos, speed, direction) {
        this.length = length;
        this.pos = pos;
        this.speed = speed;
        this.direction = direction;
    }
    Player.prototype.getLength = function () {
        return this.length;
    };
    Player.prototype.setLength = function (length) {
        this.length = length;
    };
    Player.prototype.getPos = function () {
        return this.pos;
    };
    Player.prototype.setPos = function (pos) {
        this.pos = pos;
    };
    Player.prototype.getSpeed = function () {
        return this.speed;
    };
    Player.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Player.prototype.getDirection = function () {
        return this.direction;
    };
    Player.prototype.setDirection = function (direction) {
        this.direction = direction;
    };
    return Player;
}());
var player = new Player(1, { x: 6, y: 6 }, 1, 'down');
function loop() {
    var length = player.getLength();
    var pos = player.getPos();
    var speed = player.getSpeed();
    var direction = player.getDirection();
    setTimeout(function () { return loop(); }, 1000);
}
