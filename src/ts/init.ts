import Menu from './classes/menu.js';
import Game from './classes/game.js';
import Playground from './classes/playground.js';
import Player from './classes/player.js';
import Sound from './classes/sound.js';

export const menu = new Menu();
export const game = new Game();
export const player = new Player({x: 8, y: 8}, 1, 'down');
export const playGround  = new Playground();
export const sound  = new Sound();