import React from "react";
import Song from "../Song";
import "./style.css";

/**
 * Component to display the songs a playlist contains in the main panel.
 * 
 * @param displaySongs - The list of songs to be displayed.
 * @param setDisplaySongs - Used to update state when a song is removed or added to the playlist through the SongDisplay.
 */
const SongDisplay = ({displaySongs, setDisplaySongs, currentSong, setCurrentSong}) => {
    return (
        <div id="main-panel">
            <div id="song-display">
                {displaySongs.map((song) => (
                    <Song
                        key={`${song.title}${song.artist}${song.album}${song.length}`}
                        title={song.title}
                        artist={song.artist}
                        album={song.album}
                        length={song.length}
                        displaySongs={displaySongs}
                        setDisplaySongs={setDisplaySongs}
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                    />
                ))}
            </div>
        </div>
    );
}

export default SongDisplay;