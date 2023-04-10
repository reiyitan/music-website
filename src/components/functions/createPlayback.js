import { Howl } from "howler"; 

export default function createPlayback() {
    const playback = new Howl({
        src: ["/songs/Icronic.mp3"],
        volume: 0.01,
        onload: () => {
            playback.play();
        }
    });
    return playback;
}