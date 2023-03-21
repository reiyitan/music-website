import React from "react"; 
import { useState } from "react"; 
import Playlist from "./Playlist"; 

const Sidebar = () => {
    const [playlists, setPlaylists] = useState([]); 
    const addPlaylist = () => {
        setPlaylists(playlists.concat(<Playlist key={playlists.length}/>)); 
    }

    return (
        <div id="sidebar">
            <button onClick={addPlaylist} id="add-playlist-button">+ Add a playlist</button>
            <div id="sidebar-playlists">
                {playlists}
            </div>
        </div>
    );
}

export default Sidebar; 