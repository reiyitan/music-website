import React from "react"; 
import { useState } from "react";
import { loadPlaylists } from "../functions";
import "./style.css";

/**
 * Child component that is displayed when the "+" button is clicked next to a SearchbarSong. 
 * 
 * @param songTitle - The title of a user playlist.
 * @returns The child component to be displayed.
 */
const Playlist = ({playlistTitle, songTitle, songArtist, songAlbum, songLength}) => {
    const handleClick = () => {
        console.log(`TODO: add ${songTitle} by ${songArtist} to ${playlistTitle}`);
    }

    return (
        <>
            <button 
                className="playlist-select-button"
                    onClick={handleClick}>{playlistTitle}</button>
        </>
    )
}

/**
 * A component that represents a single song when a user uses the searchbar. 
 */
const SearchbarSong = ({title, artist, album, length, currentSong, setCurrentSong}) => {
    const [addingSong, setAddingSong] = useState(false);
    const [playlists, setPlaylists] = useState([]);

    /**
     * When the + button is clicked on a song, the user is prompted
     * to add it to a playlist. 
     */
    const addSong = () => {
        if (addingSong) {
            setAddingSong(false);
            return
        }
        setPlaylists(loadPlaylists("user goes here"));
        setAddingSong(true);
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
        <>
            <div className="song-row">
                <button className={(isPlaying()) ? "song-row-playbutton-playing" : "song-row-playbutton-notplaying"}
                    onClick={playSong}>
                    <span className="song-span-title">{title}</span>
                    <span className="song-span-artist">{artist}</span>
                    <span className="song-span-album">{album}</span>
                    <span className="song-span-length">{length}</span>
                </button>
                <button 
                    className={addingSong ? "add-button-adding" : "add-button-notadding"} 
                    onClick={addSong}>+</button>
            </div>
            <div className={addingSong ? "playlist-list" : "hidden"}>
                {playlists.map((playlistTitle) => (
                    <Playlist
                        key={playlistTitle}
                        playlistTitle={playlistTitle} 
                        songTitle={title}
                        songArtist={artist}
                        songAlbum={album}
                        songLength={length}
                    />
                ))}
            </div>
        </>
    );
}
export default SearchbarSong; 