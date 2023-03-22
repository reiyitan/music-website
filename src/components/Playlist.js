import React from "react"; 

/**
 * Component for creating a playlist in the Sidebar. 
 * 
 * @param playlistId - 
 */
const Playlist = ({playlistName, playlists, setPlaylists}) => {
    const handleDelete = () => {
        const newList = playlists.filter((playlist) => playlist.playlistName !== playlistName);
        setPlaylists(newList);
    }

    return (
        <div>
            <button className="sidebar-playlist-button">{playlistName}</button>
            <button className="sidebar-delete-button" onClick={handleDelete}>-</button>
        </div>
    );
}

export default Playlist;