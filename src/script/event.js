window.addEventListener('keydown', function (event) {
    if (player.isDead)
        return;
    var direction = player.getDirection();
    switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
            if (direction === 'up' || direction === 'down')
                return;
            player.setDirection('up');
            loop(true);
            return;
        case 'KeyS':
        case 'ArrowDown':
            if (direction === 'up' || direction === 'down')
                return;
            player.setDirection('down');
            loop(true);
            return;
        case 'KeyA':
        case 'ArrowLeft':
            if (direction === 'left' || direction === 'right')
                return;
            player.setDirection('left');
            loop(true);
            return;
        case 'KeyD':
        case 'ArrowRight':
            if (direction === 'left' || direction === 'right')
                return;
            player.setDirection('right');
            loop(true);
            return;
    }
});
window.addEventListener('resize', function (_) {
    responsivity();
});
function responsivity() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var playGroundStyle = document.getElementById('play-ground').style;
    var value = (width < height) ? width * 0.9 : height * 0.9;
    playGroundStyle.width = "".concat(value, "px");
    playGroundStyle.height = "".concat(value, "px");
}
responsivity();
