import React from "react";
import { loadAllSongs } from "../functions";
import "./style.css";

/**
 * Component for the search bar. 
 * 
 * @param setDisplaySongs - Updates the songs displaying on the webpage.
 * @param setHeader - Updates the header.
 * 
 * @returns The searchbar component. 
 */
const Searchbar = ({setDisplaySongs, setHeader}) => {
    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.query.value;
        setHeader(`Search results for "${query}"`)
        const allSongs = loadAllSongs();
        const result = allSongs.filter((song) => {
            const title = song.title.toLowerCase();
            const artist = song.artist.toLowerCase();
            const album = song.album.toLowerCase(); 
            return title.includes(query) || artist.includes(query) || album.includes(query);
        });
        setDisplaySongs(result);
    }
    return (
        <div id="searchbar-div">
            <form onSubmit={handleSearch}>
                <input 
                    id="searchbar-input" 
                    type="text" 
                    placeholder="Find something to listen to"
                    name="query"
                 />
            </form>
        </div>
    );
}

export default Searchbar; 