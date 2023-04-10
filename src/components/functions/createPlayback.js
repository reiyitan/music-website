import { Howl } from "howler"; 

export default function createPlayback(title, artist, album, length) {
    const playback = new Howl({
        src: ["/songs/ABC.flac"],
        volume: 0.01,
        onload: () => {
            playback.play();
        }
    });
    return playback;
}