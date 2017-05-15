import tieFighter from '../img/twin-ion-engine.jpg';
import xWing from '../img/t-65-x-wing.png';
import yWing from '../img/y-wing.jpg';
import yt1300 from '../img/yt-1300.jpg';
import alphaXG1 from '../img/alpha-class-xg-1.jpg';
import lambdaT4 from '../img/lambda-class-t4-a-shuttle.png';
import rz1 from '../img/rz-1-a-wing.png';
import bWing from '../img/b-wing-starfighter.jpg';

// since there's no unique ID per starfighter in the JSON
// response, we have to put these images in the order that
// they appear in the JSON feed. Keep the order exact!
const images = [
    tieFighter,
    xWing,
    yWing,
    yt1300,
    alphaXG1,
    lambdaT4,
    rz1,
    bWing
];

export default images;