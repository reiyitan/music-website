import React from "react";
import { useState } from "react";
import PlaylistSongs from "../PlaylistSongs";
import SearchbarSongs from "../SearchbarSongs";
import "./style.css";

/**
 * Component to display the songs a playlist contains in the main panel.
 * 
 * @param displayType - Used to distinguish whether the component should display PlaylistSongs or SearchbarSongs.
 * @param displaySongs - The list of songs to be displayed.
 * @param setDisplaySongs - Used to update state when a song is removed or added to the playlist through the SongDisplay.
 * @param currentSong - The current song that is playing.
 * @param setCurrentSong - Used to update the current song that is playing.
 * @param handleDelete - Used to delete a song from a playlist. 
 * 
 * @returns The section of the webpage dedicated to displaying songs.
 */
const SongDisplay = ({displayType, displaySongs, setDisplaySongs, currentSong, 
    setCurrentSong, handleDelete, playbackRef, pauseSong, songIsPlaying, setSongIsPlaying}) => {
    const [openID, setOpenID] = useState("");
    return (
        <div id="main-panel">
            <button id="song-display-header">
                <span className="header-span-title">Title</span>
                <span className="header-span-artist">Artist</span>
                <span className="header-span-album">Album</span>
                <span className="header-span-length">Length</span>
            </button>
            <div id="filler"></div>
            <div id="song-display">
                {(displayType==="playlist")
                    ? <PlaylistSongs
                          displaySongs={displaySongs}
                          setDisplaySongs={setDisplaySongs}
                          currentSong={currentSong}
                          setCurrentSong={setCurrentSong}
                          handleDelete={handleDelete}
                          playbackRef={playbackRef}
                          pauseSong={pauseSong}
                          songIsPlaying={songIsPlaying}
                          setSongIsPlaying={setSongIsPlaying}
                    />
                    : <SearchbarSongs 
                          displaySongs={displaySongs}
                          currentSong={currentSong}
                          setCurrentSong={setCurrentSong}
                          openID={openID}
                          setOpenID={setOpenID}
                          playbackRef={playbackRef}
                          pauseSong={pauseSong}
                          songIsPlaying={songIsPlaying}
                          setSongIsPlaying={setSongIsPlaying}
                      />
                }
            </div>
        </div>
    );
}

export default SongDisplay;