import React from "react";
import PlaylistSong from "../PlaylistSong";
import SearchbarSong from "../SearchbarSong";
import "./style.css";

/**
 * Component to display the songs a playlist contains in the main panel.
 * 
 * @param displayType - Used to distinguish whether the component should display PlaylistSongs or SearchbarSongs.
 * @param displaySongs - The list of songs to be displayed.
 * @param setDisplaySongs - Used to update state when a song is removed or added to the playlist through the SongDisplay.
 * @param currentSong - The current song that is playing.
 * @param setCurrentSong - Used to update the current song that is playing. 
 * 
 * @returns The section of the webpage dedicated to displaying songs.
 */
const SongDisplay = ({displayType, displaySongs, setDisplaySongs, currentSong, setCurrentSong}) => {
    return (
        <div id="main-panel">
            <div id="song-display">
                {(displayType==="playlist")
                    ?  displaySongs.map((song) => (
                        <PlaylistSong
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
                    ))
                    : displaySongs.map((song) => (
                        <SearchbarSong
                            key={`${song.title}${song.artist}${song.album}${song.length}`}
                            title={song.title}
                            artist={song.artist}
                            album={song.album}
                            length={song.length}
                            currentSong={currentSong}
                            setCurrentSong={setCurrentSong}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default SongDisplay;