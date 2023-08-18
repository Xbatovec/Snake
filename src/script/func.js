function getClassList(index) {
    return document.getElementsByClassName('item')[index].classList;
}
function posToIndex(pos) {
    return (pos.y - 1) * 15 + pos.x - 1;
}
function checkDeath(pos) {
    var isInWall = (pos.x < 1 || pos.x > 15 || pos.y < 1 || pos.y > 15);
    if (isInWall) {
        player.isDead = true;
        return;
    }
    var posElmnt = getClassList(posToIndex(player.getPos()));
    player.isDead = posElmnt.contains('snake-item');
}
function render() {
    var snakeHead = posToIndex(player.getPos());
    var snakeNeck = posToIndex(player.getActivePoints()[player.getLength() - 2]);
    var snakeTail = posToIndex(player.getActivePoints()[0]);
    document.getElementsByClassName('item')[snakeHead].classList.add('snake-head-item');
    document.getElementsByClassName('item')[snakeNeck].classList.remove('snake-head-item');
    document.getElementsByClassName('item')[snakeNeck].classList.add('snake-item');
    player.shiftActivePoint();
    document.getElementsByClassName('item')[snakeTail].classList.remove('snake-item');
}
function start() {
    var snakeHead = posToIndex(player.getPos());
    var activePoints = player.getActivePoints();
    getClassList(snakeHead).add('snake-head-item');
    for (var i = 0; i < player.getLength() - 1; i++)
        getClassList(posToIndex(activePoints[i])).add('snake-item');
    player.isDead = false;
    loop();
}
