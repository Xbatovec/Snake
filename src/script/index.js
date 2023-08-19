var Player = /** @class */ (function () {
    function Player(pos, speed, direction) {
        this.activePoints = [];
        this.isDead = true;
        this.stomach = { good: true, neutral: true, bad: true };
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
    Player.prototype.addSpeed = function (speed) {
        this.speed += speed;
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
        return this.activePoints;
    };
    Player.prototype.pushActivePoint = function (activePoint) {
        this.activePoints.push(activePoint);
    };
    Player.prototype.shiftActivePoint = function () {
        this.activePoints.shift();
    };
    Player.prototype.clearStomach = function () {
        this.stomach = { good: false, neutral: false, bad: false };
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
        checkFood({ x: finalX, y: finalY });
    };
    return Player;
}());
var Playground = /** @class */ (function () {
    function Playground() {
        this.width = 15;
        this.foodPoints = [];
    }
    Playground.prototype.clearFood = function () {
        // return if player didn't eat
        if (!(player.stomach.good || player.stomach.neutral || player.stomach.bad))
            return;
        // loop through every food point
        for (var i = 0; i < this.foodPoints.length; i++) {
            var index = this.foodPoints[i];
            var classList = getClassList(index);
            var goodFood = classList.contains('good-food-item');
            var neutralFood = classList.contains('neutral-food-item');
            var badFood = classList.contains('bad-food-item');
            var foodName = void 0;
            switch (true) {
                case goodFood:
                    foodName = 'good';
                    break;
                case neutralFood:
                    foodName = 'neutral';
                    break;
                case badFood:
                    foodName = 'bad';
                    break;
            }
            getClassList(index).remove("".concat(foodName, "-food-item"));
        }
        this.foodPoints = [];
    };
    Playground.prototype.generateFood = function () {
        // return if player didn't eat
        if (!(player.stomach.good || player.stomach.neutral || player.stomach.bad))
            return;
        var width = this.width;
        // substract snake items from all items = avaible items for food
        var allItems = Array.from({ length: width * width }, function (_, index) { return index; });
        var snakeItems = player.getActivePoints().map(function (item) { return posToIndex(item); });
        var avaibleItems = allItems.filter(function (item) { return !snakeItems.includes(item); });
        // generate 2 random indexes of new food
        var randomItems = [];
        for (var i = 0; i < 2; i++)
            randomItems.push(avaibleItems[rng(0, avaibleItems.length - 1)]);
        // change the second index if its value is the same as the value of the first index
        if (randomItems[0] === randomItems[1])
            randomItems[1] = Math.ceil(randomItems[1] / (rng(11, 100) / 10)) + rng(1, 20);
        // generate random food type (good, neutral, bad)
        var randomTypes = [];
        var randomNumber = rng(1, 100);
        switch (true) {
            // bad & bad (4 % chance)
            case randomNumber <= 4 + 0:
                randomTypes = ['bad', 'bad'];
                break;
            // good & bad (5 % chance)
            case randomNumber <= 5 + 4:
                randomTypes = ['good', 'bad'];
                break;
            // good & good (6 % chance)
            case randomNumber <= 6 + 9:
                randomTypes = ['good', 'good'];
                break;
            // good & neutral (10 % chance)
            case randomNumber <= 10 + 15:
                randomTypes = ['good', 'neutral'];
                break;
            // neutral & bad (25 % chance)
            case randomNumber <= 25 + 25:
                randomTypes = ['neutral', 'bad'];
                break;
            // neutral & neutral (50 % chance)
            case randomNumber <= 50 + 50:
                randomTypes = ['neutral', 'neutral'];
                break;
        }
        // generate food & add it in foodPoints
        for (var i = 0; i < 2; i++) {
            getClassList(randomItems[i]).add("".concat(randomTypes[i], "-food-item"));
            this.foodPoints.push(randomItems[i]);
        }
    };
    return Playground;
}());
var player = new Player({ x: 8, y: 8 }, 1, 'right');
var playGround = new Playground();
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
    moveHead();
    removeTail();
    playGround.clearFood();
    playGround.generateFood();
    player.clearStomach();
    loopTimeout = setTimeout(function () { return loop(); }, speedFormula());
}
