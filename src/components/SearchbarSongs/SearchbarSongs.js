import React from "react"; 
import { useState, memo } from "react";
import { loadPlaylists } from "../functions";
import { createPlayback } from "../functions";
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
    if (prevProps.popupShowing !== nextProps.popupShowing) {
        return false;
    }
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
 * A component that represents a single song when a user uses the searchbar. 
 * 
 * @param title - The title of the Searchbar Song. 
 * @param artist - The artist of the Searchbar song. 
 * @param album - The album of the Searchbar song. 
 * @param length - The length of the Searchbar song. 
 * @param currentSong - The current song being played by the web app.
 * @param setCurrentSong - Used to set the current song being played by the web app. 
 * @param popupShowing - Either true or false. True if add to playlist popup should show. 
 * @param setOpenID - Used to change the state in SongDisplay to let the component know what popup is showing. 
 * 
 * @return One of the search results to be displayed. 
 */
const SearchbarSong = memo(function SearchbarSong({title, artist, album, length, currentSong, setCurrentSong,
    popupShowing, setOpenID}) {
    console.log("rerender");
    const [playlists, setPlaylists] = useState([]);
    /**
     * When the + button is clicked on a song, the user is prompted
     * to add it to a playlist. 
     */
    const addSong = () => {
        if (popupShowing) {
            setOpenID("");
            return
        }
        setPlaylists(loadPlaylists("user goes here"));
        setOpenID(`${title}${artist}${album}${length}`);
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
        createPlayback();
    }

    return (
        <>
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
                <button 
                    className={(popupShowing) 
                        ? "add-button adding" 
                        : "add-button notadding"} 
                    onClick={addSong}>+</button>
            </div>
            <div className={(popupShowing) ? "playlist-list-wrapper" : "hidden"}>
                <div className="playlist-list-header">Choose a playlist to add to:</div>
                <div className="playlist-list">
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
            </div>
        </>
    );
}, propsAreEqual);

/**
 * Component containing all SearchbarSong components. 
 * 
 * @param displaySongs - List of songs to be displayed. 
 * @param currentSong - The current song that is playing 
 * @param setCurrentSong - Update what song is currently playing. 
 * @param openID - The ID of the SearchbarSong that has its add to playlist menu open. 
 * @param setOpenID - Update what SearchbarSong is currently open by changing openID.
 */
const SearchbarSongs = ({displaySongs, currentSong, setCurrentSong, openID, setOpenID}) => {
    return (
        displaySongs.map((song) => (
            <SearchbarSong
                key={`${song.title}${song.artist}${song.album}${song.length}`}
                title={song.title}
                artist={song.artist}
                album={song.album}
                length={song.length}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                popupShowing={(openID===`${song.title}${song.artist}${song.album}${song.length}`)
                                ? true
                                : false
                }
                setOpenID={setOpenID}
            />
        ))
    ); 
}

export default SearchbarSongs; 