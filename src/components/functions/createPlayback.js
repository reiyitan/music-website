import { Howl } from "howler"; 

export default function createPlayback(title, artist, album, length, setSongIsPlaying) {
    let path;
    if (artist !== "Kevin Macleod") {
        path = `../../songs/Flight of the Bumblebee.mp3`;
    }
    else {
        path = `../../songs/${title}.mp3`;
    }
    const playback = new Howl({
        src: [path],
        volume: 0.1,
        onload: () => {
            playback.play();
            setSongIsPlaying(true);
        },
        onend: () => {
            
        }
    });
    return playback;
}