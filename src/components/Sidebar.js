import React from "react"; 
import { useState } from "react"; 
import Searchbar from "./Searchbar";
import Playlist from "./Playlist"; 

const Sidebar = () => {
    const [playlists, setPlaylists] = useState([]); 
    const [id, setIdNum] = useState(0); 
    const addPlaylist = () => {
        setPlaylists(playlists.concat(<Playlist key={id}/>)); 
        setIdNum(id + 1); 
    }

    return (
        <div id="sidebar">
            <Searchbar />
            <button onClick={addPlaylist} id="add-playlist-button">+ Add a playlist</button>
            <div id="sidebar-playlists">
                {playlists}
            </div>
        </div>
    );
}

export default Sidebar; 