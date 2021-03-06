import { keys, without } from 'lodash';

let conf = {
    // TODO dynamically populate mods
    mods: ['sandstorm', 'default'],
    near_color: { r: 255, g: 0, b: 0 },
    far_color:  { r: 0, g: 0, b: 255 },
    kinect: {
        res: { width: 640, height: 480 }
    },
    camera: {
        origin: { x: 320, y: 240, z: 128 },
        x: 320,
        y: 240,
        z: -175
    },
    particle_size: 4.0,
    kinect_tilt: 10,
};

export default conf;
