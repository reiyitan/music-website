import React from "react";

/**
 * A component for displaying song information in the main panel. 
 * 
 * @param title - The title of the song. 
 * @param artist - The name of the song's artist.
 * @param album - The album the song is from. 
 * @param length - The length of the song.
 */
const Song = ({title, artist, album, length}) => {
    return (
        <div className="song-row">
            <span className="song-span-title">{title}</span>
            <span className="song-span-artist">{artist}</span>
            <span className="song-span-album">{album}</span>
            <span className="song-span-length">{length}</span>
        </div>
    );
}

export default Song;