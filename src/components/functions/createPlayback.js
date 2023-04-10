import {Howl, Howler} from "howler"; 

export default function createPlayback() {
    const playback = new Howl({
        src: ["../../songs/Chimera.flac"]
    });
    return playback;
}