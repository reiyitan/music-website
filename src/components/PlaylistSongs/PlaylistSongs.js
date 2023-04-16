import React from "react";
import { Context } from "../App/App";
import { memo, useContext } from "react";
import { isPlaying } from "../functions";
import "./style.css";

/**
 * Determines when a component should not be rerendered.
 * 
 * @param prevProps - The props from the previous render of this component. 
 * @param nextProps - The props from the next render of this component. 
 * @returns true if this component should NOT be rerendered. false if this component SHOULD be rerendered.
 */
const propsAreEqual = (prevProps, nextProps) => {
    const wasPlaying = isPlaying(prevProps.currentSong, prevProps.title,
        prevProps.artist, prevProps.album, prevProps.length, prevProps.songIsPlaying); 
    const willPlay = isPlaying(nextProps.currentSong, nextProps.title, 
        nextProps.artist, nextProps.album, nextProps.length, nextProps.songIsPlaying);

    if (wasPlaying && !willPlay) {
        return false;
    }
    if (!wasPlaying && willPlay) {
        return false;
    }
    return true;
}

/**
 * A component for displaying song information in the main panel. 
 * 
 * @param title - The title of the song. 
 * @param artist - The name of the song's artist.
 * @param album - The album the song is from. 
 * @param length - The length of the song.
 * @param currentSong - An object representing the current song that is playing. 
 * @param setCurrentSong - Updates state of currentSong. 
 * @param currPlaylistPlaying - The current playlist that is playing.
 * @param setCurrPlaylistPlaying - Sets state of currentPlaylistPlaying.
 * @param currPlaylistDisplaying - The current playlist that is displaying. 
 *     (the playlist that this PlaylistSong belongs to)
 * @param handleDelete - Handles deleting a song from a playlist.
 * @param pauseSong - A function that handles pausing the song. 
 * @param songIsPlaying - True if a song is playing, false otherwise. 
 * @param setSongIsPlaying - Update state of songIsPlaying. 
 * @param handleDelete - Function for deleting a song from a playlist.
 * @param history - A list of the songs that were previously played.
 * @param setHistory - Sets state of history.
 * @param queue - A list of the songs to be played.
 * @param setQueue - Sets state of queue.
 * 
 * @returns A component that represents one row of the playlist displayed on the main panel.
 */
const PlaylistSong = memo(function({
    title, 
    artist, 
    album, 
    length, 
    currentSong,
    songIsPlaying, 
}) {
    const {
        setCurrentSong,
        setSongIsPlaying,
        queue,
        setQueue,
        history,
        setHistory,
        handleDelete,
        pauseSong,
        playSong,
        currPlaylistPlaying,
        setCurrPlaylistPlaying,
        currPlaylistDisplaying
    } = useContext(Context);
    /**
     * Plays the current song. 
     * Also updates the song queue if currentPlaylist differs from
     * the playlist that this PlaylistSong belongs to.
     */
    const handlePlay = () => {
        setCurrentSong({
            "title": title,
            "artist": artist,
            "album": album,
            "length": length
        });
        playSong(title, artist, album, length);
    }

    /**
     * Handles deletion of a song from a playlist.
     * Calls handleDelete defined in App.js.
     */
    const deleteSong = () => {
        handleDelete({
            title: title,
            artist: artist,
            album: album,
            length: length
        });
    }

    return (
        <div className="song-row">
            <button className={(isPlaying(currentSong, title, artist, album, length, songIsPlaying)) 
                    ? "song-row-playbutton playing" 
                    : "song-row-playbutton notplaying"}
                onClick={(isPlaying(currentSong, title, artist, album, length, songIsPlaying))
                    ? pauseSong
                    : handlePlay
                }>
                <span className="song-span-title">{title}</span>
                <span className="song-span-artist">{artist}</span>
                <span className="song-span-album">{album}</span>
                <span className="song-span-length">{length}</span>
            </button>
            <button className="song-row-deletebutton" onClick={deleteSong}>-</button>
        </div>
    );
}, propsAreEqual);

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
                title={song.title}
                artist={song.artist}
                album={song.album}
                length={song.length}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                songIsPlaying={songIsPlaying}
            />
        ))
    );
}

export default PlaylistSongs;