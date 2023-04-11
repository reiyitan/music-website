import { Howl } from "howler"; 

export default function createPlayback(title, artist, album, length) {
    const path = `../../songs/${title}.mp3`;
    const playback = new Howl({
        src: [path],
        volume: 0.05,
        onload: () => {
            playback.play();
        }
    });
    return playback;
}