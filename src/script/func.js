function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getClassList(index) {
    return document.getElementsByClassName('item')[index].classList;
}
function posToIndex(pos) {
    return (pos.y - 1) * playGround.width + pos.x - 1;
}
function checkDeath(pos) {
    var isInWall = (pos.x < 1 || pos.x > playGround.width || pos.y < 1 || pos.y > playGround.width);
    if (isInWall) {
        player.isDead = true;
        return;
    }
    var posElmnt = getClassList(posToIndex(player.getPos()));
    player.isDead = posElmnt.contains('snake-item');
}
function checkFood(pos) {
    if (player.isDead)
        return;
    var classList = getClassList(posToIndex(pos));
    var goodFood = classList.contains('good-food-item');
    var neutralFood = classList.contains('neutral-food-item');
    var badFood = classList.contains('bad-food-item');
    player.stomach = { good: goodFood, neutral: neutralFood, bad: badFood };
}
function moveHead() {
    var snakeHead = posToIndex(player.getPos());
    var snakeNeck = posToIndex(player.getActivePoints()[player.getLength() - 2]);
    getClassList(snakeHead).add('snake-head-item');
    getClassList(snakeNeck).remove('snake-head-item');
    getClassList(snakeNeck).add('snake-item');
}
function removeTail() {
    var snakeTail = posToIndex(player.getActivePoints()[0]);
    var snakeLength = player.getLength();
    switch (true) {
        case player.stomach.good: break;
        case player.stomach.neutral:
            player.addSpeed(1);
            break;
        case player.stomach.bad:
            player.addSpeed(1);
            player.shiftActivePoint();
            getClassList(snakeTail).remove('snake-item');
            break;
        default:
            player.shiftActivePoint();
            getClassList(snakeTail).remove('snake-item');
            break;
    }
}
function speedFormula() {
    var speed = player.getSpeed();
    var base = 300;
    var lvl1 = {
        maxSpeed: 10,
        range: 10,
        multi: 10,
        maxValue: 100
    };
    var lvl2 = {
        maxSpeed: 25,
        range: 15,
        multi: 5,
        maxValue: 75
    };
    switch (true) {
        case speed <= lvl1.maxSpeed: return base - speed * lvl1.multi;
        case speed <= lvl2.maxSpeed: return base - lvl1.maxValue - (speed - lvl2.range) * lvl2.multi;
        default: return base - lvl1.maxValue - lvl2.maxValue;
    }
}
function start() {
    var snakeHead = posToIndex(player.getPos());
    var activePoints = player.getActivePoints();
    getClassList(snakeHead).add('snake-head-item');
    for (var i = 0; i < player.getLength() - 1; i++)
        getClassList(posToIndex(activePoints[i])).add('snake-item');
    playGround.generateFood();
    player.clearStomach();
    player.isDead = false;
    loop();
}
