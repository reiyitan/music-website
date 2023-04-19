import React from "react";
import { Context } from "../App/App";
import { useContext } from "react";
import { isPlaying, songsAreEqual } from "../functions";
import "./style.css";

/**
 * A component for displaying song information in the main panel. 
 * 
 * @param song - An object representing this song.
 * @param currentSong - An object representing the current song that is playing. 
 * @param setCurrentSong - Updates state of currentSong. 
 * @param setCurrPlaylistPlaying - Sets state of currentPlaylistPlaying.
 * @param currPlaylistDisplaying - The current playlist that is displaying. 
 *     (the playlist that this PlaylistSong belongs to)
 * @param handleDelete - Handles deleting a song from a playlist.
 * @param pauseSong - A function that handles pausing the song. 
 * @param songIsPlaying - True if a song is playing, false otherwise. 
 * @param setSongIsPlaying - Update state of songIsPlaying. 
 * @param handleDelete - Function for deleting a song from a playlist.
 * 
 * @returns A component that represents one row of the playlist displayed on the main panel.
 */
const PlaylistSong = function({
    song,
    currentSong,
    songIsPlaying, 
}) {
    const {
        setCurrentSong,
        handleDelete,
        pauseSong,
        playSong,
        setCurrPlaylistPlaying,
        currPlaylistDisplaying,
        historyRef
    } = useContext(Context);
    /**
     * Plays the current song. 
     */
    const handlePlay = () => {
        if (
            (historyRef.current.length === 0
            || !songsAreEqual(historyRef.current[historyRef.current.length - 1], song))
            && currentSong !== ""
        ) historyRef.current.push(currentSong);
        setCurrentSong(song);
        setCurrPlaylistPlaying(currPlaylistDisplaying);
        playSong(song);
    }

    /**
     * Handles deletion of a song from a playlist.
     * Calls handleDelete defined in App.js.
     */
    const deleteSong = () => {
        handleDelete(song);
    }

    return (
        <div className="song-row">
            <button className={(isPlaying(currentSong, song, songIsPlaying)) 
                    ? "song-row-playbutton playing" 
                    : "song-row-playbutton notplaying"}
                onClick={(isPlaying(currentSong, song, songIsPlaying))
                    ? pauseSong
                    : handlePlay
                }>
                <span className="song-span-title">{song.title}</span>
                <span className="song-span-artist">{song.artist}</span>
                <span className="song-span-album">{song.album}</span>
                <span className="song-span-length">{song.length}</span>
            </button>
            <button className="song-row-deletebutton" onClick={deleteSong}>-</button>
        </div>
    );
}

/**
 * Component that maps each song in displaySongs to a PlaylistSong component. 
 * 
 * @param displaySongs - The list of songs to be displayed. 
 * @param currentSong - The ID of the song that is currently playing. 
 * @param setCurrentSong - Update currentSong. 
 * @param songIsPlaying - True if a song is currently playing, false otherwise. 
 * @param setSongIsPlaying - Update state of songIsPlaying.
 * 
 * @returns The component that maps each song in displaySongs to PlaylistSong. 
 */
const PlaylistSongs = ({
    displaySongs, 
    currentSong,
    setCurrentSong,
    songIsPlaying, 
}) => {
    return (
        displaySongs.map((song) => (
            <PlaylistSong
                key={`${song.title}${song.artist}${song.album}${song.length}`}
                song={song}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                songIsPlaying={songIsPlaying}
            />
        ))
    );
}

export default PlaylistSongs;