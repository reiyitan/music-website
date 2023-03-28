import React from "react"; 
import "./style.css";

/**
 * A component that represents a single song when a user uses the searchbar. 
 */
const SearchbarSong = ({title, artist, album, length, currentSong, setCurrentSong}) => {

    /**
     * When the + button is clicked on a song, the user is prompted
     * to add it to a playlist. 
     */
    const addSong = () => {

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
            <button className={(isPlaying()) ? "song-row-playbutton-playing" : "song-row-playbutton-notplaying"}
                onClick={playSong}>
                <span className="song-span-title">{title}</span>
                <span className="song-span-artist">{artist}</span>
                <span className="song-span-album">{album}</span>
                <span className="song-span-length">{length}</span>
            </button>
            <button className="song-row-addbutton" onClick={addSong}>+</button>
        </div>
    );
}
export default SearchbarSong; 