import React from "react"; 
import { useState } from "react"; 

const PlaylistNameForm = ({setPlaylistName, setDeleteButtonStyle, setPlaylistButtonStyle}) => {
    const [formStyle, setFormStyle] = useState("playlist-name-form"); 
    const hideForm = () => {
        setFormStyle("hidden");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setPlaylistName(e.target.playlistName.value);
        setPlaylistButtonStyle("sidebar-playlist-button");
        setDeleteButtonStyle("sidebar-delete-button");
        hideForm();
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" className={formStyle} placeholder="Enter playlist name:" name="playlistName" />
        </form>
    );
}

const Playlist = () => {
    const [playlistName, setPlaylistName] = useState("");
    const [playlistButtonStyle, setPlaylistButtonStyle] = useState("hidden");
    const [deleteButtonStyle, setDeleteButtonStyle] = useState("hidden");

    return (
        <div>
            <PlaylistNameForm setPlaylistName={setPlaylistName} setPlaylistButtonStyle={setPlaylistButtonStyle}
                setDeleteButtonStyle={setDeleteButtonStyle} />
            <button className={playlistButtonStyle}>{playlistName}</button>
            <button className={deleteButtonStyle}>-</button>
        </div>
    );
}

export default Playlist;