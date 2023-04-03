import React from "react";
import "./style.css";

/**
 * A component for displaying song information in the main panel. 
 * 
 * @param title - The title of the song. 
 * @param artist - The name of the song's artist.
 * @param album - The album the song is from. 
 * @param length - The length of the song.
 * @param displaySongs - The list of songs in a playlist. This is state of index.js. 
 * @param setDisplaySongs - The function to set the list of songs.
 * 
 * @returns A component that represents one row of the playlist displayed on the main panel.
 */
const PlaylistSong = ({title, artist, album, length, displaySongs, setDisplaySongs, 
    currentSong, setCurrentSong}) => {

    /**
     * Deletes the current song from a playlist.
     * 
     * @todo Update backend when the song is deleted.
     */
    const deleteSong = () => {
        const newSongList = displaySongs.filter((song) => (
            !(song.title === title && song.artist === artist
                && song.album === album && song.length === length)
        ));
        setDisplaySongs(newSongList);
    }

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
     * Determines if the current song being played is the same as the 
     * song represented by this component. 
     * 
     * @returns True if the songs are the same, false otherwise.
     */
    const isPlaying = () => {
        return (
            currentSong.title === title
                && currentSong.artist === artist
                && currentSong.album === album
                && currentSong.length === length
        );
    }

    return (
        <div className="song-row">
            <button className={(isPlaying()) ? "song-row-playbutton playing" : "song-row-playbutton notplaying"}
                onClick={playSong}>
                <span className="song-span-title">{title}</span>
                <span className="song-span-artist">{artist}</span>
                <span className="song-span-album">{album}</span>
                <span className="song-span-length">{length}</span>
            </button>
            <button className="song-row-deletebutton" onClick={deleteSong}>-</button>
        </div>
    );
}

/**
 * Component that maps each song in displaySongs to a PlaylistSong component. 
 * 
 * @param displaySongs - The list of songs to be displayed. 
 * @param setDisplaySongs - Used to update the list of displaying songs when a song is deleted from a playlist. 
 * @param currentSong - The ID of the song that is currently playing. 
 * @param setCurrentSong - Update currentSong. 
 * 
 * @returns The component that maps each song in displaySongs to  PlaylistSong. 
 */
const PlaylistSongs = ({displaySongs, setDisplaySongs, currentSong, setCurrentSong}) => {
    return (
        displaySongs.map((song) => (
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
    );
}

export default PlaylistSongs;