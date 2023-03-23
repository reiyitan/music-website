import React from "react";

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
const Song = ({title, artist, album, length, displaySongs, setDisplaySongs}) => {

    /**
     * Deletes the current song from a playlist.
     * 
     * @todo Update backend when the song is deleted.
     */
    const deleteSong = () => {
        const newSongList = displaySongs.filter((song) => (
            song.title !== title && song.artist !== artist
                && song.album !== album && song.length !== length
        ));
        setDisplaySongs(newSongList);
    }

    return (
        <div className="song-row">
            <button className="song-row-playbutton">
                <span className="song-span-title">{title}</span>
                <span className="song-span-artist">{artist}</span>
                <span className="song-span-album">{album}</span>
                <span className="song-span-length">{length}</span>
            </button>
            <button className="song-row-deletebutton" onClick={deleteSong}>-</button>
        </div>
    );
}

export default Song;