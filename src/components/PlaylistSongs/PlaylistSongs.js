import React from "react";
import { memo } from "react";
import "./style.css";

/**
    * Determines if the current song being played is the same as the 
    * song represented by a SearchbarSong component. 
    * 
    * @returns True if the songs are the same, false otherwise.
    */
const isPlaying = (currentSong, title, artist, album, length) => {
    return (
        currentSong.title === title
        && currentSong.artist === artist
        && currentSong.album === album
        && currentSong.length === length
    );
}

/**
 * Determines when a component should not be rerendered.
 * 
 * @param prevProps - The props from the previous render of this component. 
 * @param nextProps - The props from the next render of this component. 
 * @returns true if this component should NOT be rerendered. false if this component SHOULD be rerendered.
 */
const propsAreEqual = (prevProps, nextProps) => {
    const wasPlaying = isPlaying(prevProps.currentSong, prevProps.title,
        prevProps.artist, prevProps.album, prevProps.length); 
    const willPlay = isPlaying(nextProps.currentSong, nextProps.title, 
        nextProps.artist, nextProps.album, nextProps.length);

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
 * @param handleDelete - Function for deleting a song from a playlist.
 * 
 * @returns A component that represents one row of the playlist displayed on the main panel.
 */
const PlaylistSong = memo(function({title, artist, album, length, currentSong, 
    setCurrentSong, handleDelete}) {

    /**
     * Plays the current song. 
     * @todo actually play the song
     */
    const playSong = () => {
        setCurrentSong({
            "title": title,
            "artist": artist,
            "album": album,
            "length": length
        });
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
            <button className={(isPlaying(currentSong, title, artist, album, length)) 
                    ? "song-row-playbutton playing" 
                    : "song-row-playbutton notplaying"}
                onClick={playSong}>
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
 * @param handleDelete - Used to delete a song from a playlist.
 * 
 * @returns The component that maps each song in displaySongs to PlaylistSong. 
 */
const PlaylistSongs = ({displaySongs, currentSong, setCurrentSong, handleDelete}) => {
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
                handleDelete={handleDelete}
            />
        ))
    );
}

export default PlaylistSongs;