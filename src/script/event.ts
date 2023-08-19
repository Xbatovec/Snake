window.addEventListener('keydown', event => {

    if (player.isDead) return;
    
    const direction = player.getDirection();

    switch (event.code) {

        case 'KeyW':
        case 'ArrowUp':
            if (direction === 'up' || direction === 'down') return;
            player.setDirection('up');
            loop(true);
            return;

        case 'KeyS':
        case 'ArrowDown':
            if (direction === 'up' || direction === 'down') return;
            player.setDirection('down');
            loop(true);
            return;

        case 'KeyA':
        case 'ArrowLeft':
            if (direction === 'left' || direction === 'right') return;
            player.setDirection('left');
            loop(true);
            return;

        case 'KeyD':
        case 'ArrowRight':
            if (direction === 'left' || direction === 'right') return;
            player.setDirection('right');
            loop(true);
            return;
    }
});

window.addEventListener('resize', _ => {
    responsivity();
});

function responsivity() {
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    const playGroundStyle = document.getElementById('play-ground').style;

    const value = (width < height) ? width * 0.9 : height * 0.9;

    playGroundStyle.width = `${value}px`;
    playGroundStyle.height = `${value}px`;
}
responsivity();