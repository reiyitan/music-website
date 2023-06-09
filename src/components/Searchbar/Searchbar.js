import React from "react";
import { Context } from "../App/App";
import Form from "../Form";
import { useContext } from "react"
import { loadAllSongs } from "../functions";

/**
 * Component for the search bar. 
 * 
 * @param setDisplaySongs - Updates the songs displaying on the webpage.
 * @param setHeader - Updates the header.
 * @param setDisplayType - Sets the displayType to "search". 
 * 
 * @returns The searchbar component. 
 */
const Searchbar = ({
    setHeader, 
    setDisplayType,
    setOpenID
}) => {
    const {
        setDisplaySongs,
        setCurrPlaylistPlaying
    } = useContext(Context);
    
    const handleSearch = (e) => {
        e.preventDefault();
        setCurrPlaylistPlaying(null);
        setOpenID("");
        const query = e.target.query.value;
        if (query === "") return;
        setHeader(`Search results for "${query}"`)
        const allSongs = loadAllSongs();
        const result = allSongs.filter((song) => {
            const title = song.title.toLowerCase();
            const artist = song.artist.toLowerCase();
            const album = song.album.toLowerCase(); 
            return title.includes(query.toLowerCase()) 
                || artist.includes(query.toLowerCase()) 
                || album.includes(query.toLowerCase());
        });
        setDisplayType("search");
        setDisplaySongs(result);
    }
    return (
        <Form
            title="Search"
            placeholder="Find something to listen to"
            handleSubmit={handleSearch}
            position = {{
                left: "0px",
                top: "0px"
            }}
            icon="search"
        />
    );
}

export default Searchbar; 