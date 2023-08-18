var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Player = /** @class */ (function () {
    function Player(pos, speed, direction) {
        this.activePoints = [];
        this.isDead = true;
        this.speed = speed;
        this.direction = direction;
        this.activePoints = [{ x: pos.x, y: pos.y - 3 }, { x: pos.x, y: pos.y - 2 }, { x: pos.x, y: pos.y - 1 }, { x: pos.x, y: pos.y }];
    }
    Player.prototype.getPos = function () {
        return this.activePoints[this.activePoints.length - 1];
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
    Player.prototype.getLength = function () {
        return this.activePoints.length;
    };
    Player.prototype.getActivePoints = function () {
        return __assign({}, this.activePoints);
    };
    Player.prototype.pushActivePoint = function (activePoint) {
        this.activePoints.push(activePoint);
    };
    Player.prototype.shiftActivePoint = function () {
        this.activePoints.shift();
    };
    Player.prototype.move = function () {
        var moveObject = { x: 0, y: 0 };
        var snakeHead = this.activePoints[this.activePoints.length - 1];
        switch (this.direction) {
            case 'up':
                moveObject.y = -1;
                break;
            case 'down':
                moveObject.y = 1;
                break;
            case 'left':
                moveObject.x = -1;
                break;
            case 'right':
                moveObject.x = 1;
                break;
        }
        var finalX = snakeHead.x + moveObject.x;
        var finalY = snakeHead.y + moveObject.y;
        this.activePoints.push({
            x: finalX,
            y: finalY
        });
        checkDeath({ x: finalX, y: finalY });
    };
    return Player;
}());
var player = new Player({ x: 8, y: 8 }, 1, 'right');
var loopTimeout;
function loop(keyDown) {
    if (keyDown === void 0) { keyDown = false; }
    if (keyDown)
        clearTimeout(loopTimeout);
    player.move();
    if (player.isDead) {
        console.log('You died');
        return;
    }
    render();
    loopTimeout = setTimeout(function () { return loop(); }, 400);
}
