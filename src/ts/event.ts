import { game, player } from "./init.js";

export function keyDown() {
    window.addEventListener('keydown', event => {

        // fullscreen
        if (event.code === 'F11') {
            if (document.fullscreenElement) {
                // Document is currently in fullscreen, so exit fullscreen
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            } else {
                // Document is not in fullscreen, so enter fullscreen
                const element = document.documentElement; // <html> element
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                }
            }
        }

        // movement
        if (player.isDead) return;
        
        const direction = player.getDirection();
    
        switch (event.code) {
    
            case 'KeyW':
            case 'ArrowUp':
                if (direction === 'up' || direction === 'down') return;
                player.setDirection('up');
                game.loop(true);
                return;
    
            case 'KeyS':
            case 'ArrowDown':
                if (direction === 'up' || direction === 'down') return;
                player.setDirection('down');
                game.loop(true);
                return;
    
            case 'KeyA':
            case 'ArrowLeft':
                if (direction === 'left' || direction === 'right') return;
                player.setDirection('left');
                game.loop(true);
                return;
    
            case 'KeyD':
            case 'ArrowRight':
                if (direction === 'left' || direction === 'right') return;
                player.setDirection('right');
                game.loop(true);
                return;
        }
    });
}

export function resize() {
    window.addEventListener('resize', _ => {
        responsivity();
    });
}

export function responsivity() {
    
    const width = window.innerWidth;
    const height = window.innerHeight;

    const playGroundStyle = document.getElementById('play-ground').style;
    const playGroundStatsStyle = document.getElementById('playground-stats').style;
    const playGroundStatsTopStyle = document.getElementById('playground-stats-top').style;
    const playGroundStatsSideStyle = document.getElementById('playground-stats-side').style;

    const value = (width < height) ? width : height;

    const playgroundValue = value * 0.7;
    const playGroundStatsTopValueWidth = value * 0.8;
    const playGroundStatsTopValueHeight = value * 0.04;
    const playGroundStatsValueWidth = value * 0.815;
    const playGroundStatsValueHeight = value * 0.2;
    const playGroundStatsSideValueWidth = value * 0.827;
    const playGroundStatsSideValueHeight = value * 0.05;

    playGroundStyle.width = `${playgroundValue}px`;
    playGroundStyle.height = `${playgroundValue}px`;

    playGroundStatsTopStyle.width = `${playGroundStatsTopValueWidth}px`;
    playGroundStatsTopStyle.height = `${playGroundStatsTopValueHeight}px`;

    playGroundStatsStyle.width = `${playGroundStatsValueWidth}px`;
    playGroundStatsStyle.height = `${playGroundStatsValueHeight}px`;

    playGroundStatsSideStyle.width = `${playGroundStatsSideValueWidth}px`;
    playGroundStatsSideStyle.height = `${playGroundStatsSideValueHeight}px`;
}