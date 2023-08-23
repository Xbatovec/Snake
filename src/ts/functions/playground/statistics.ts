import { player } from "../../init.js";
import { elId, speedFormula } from "../utilities.js";

export default function statistics() {

    const length = player.getLength();

    const lengthElmnt = elId('length-stats');
    const speedElmnt = elId('speed-stats');

    lengthElmnt.innerHTML = `${length}`;
    speedElmnt.innerHTML = `${(1000 / speedFormula()).toFixed(1)}<span>t/s</span>`;
}