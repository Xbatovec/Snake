import { player, playGround } from "../init.js";
// DOM
export function elId(id) { return document.getElementById(id); }
export function elClass(id) { return document.getElementsByClassName(id); }
export function elTag(id) { return document.getElementsByTagName(id); }
export function getClassList(index) {
    return document.getElementsByClassName('item')[index].classList;
}
// Math
export function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// idk code readability
export function posToIndex(pos) {
    return (pos.y - 1) * playGround.width + pos.x - 1;
}
// idk code readability for loop
export function speedFormula() {
    const speed = player.getSpeed();
    const base = 300;
    const lvl1 = {
        maxSpeed: 10,
        range: 10,
        multi: 10,
        maxValue: 100
    };
    const lvl2 = {
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
export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
