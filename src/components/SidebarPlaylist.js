import React from "react"; 
import { loadSongs } from "../functions/loadsongs";

/**
 * Component for creating a playlist in the Sidebar. 
 * 
 * @param playlistName - The name of the playlist.
 * @param playlists - The list of playlists in the Sidebar. 
 * @param setPlaylists - Used to update state of Sidebar playlists when deleting a playlist.
 * @param setMainPanel - Used to update state of main panel to display a playlist.
 * @param currPlaylistDisplaying - Used to check what playlist is currently being displayed on the main panel.
 * @param setCurrPlaylistDisplaying - Used to update the state of Sidebar.
 * 
 * @returns A playlist to be displayed in the sidebar.
 */
const SidebarPlaylist = ({playlistName, playlists, setPlaylists,  
    setHeader, currPlaylistDisplaying, setCurrPlaylistDisplaying, setDisplaySongs}) => {
    const handleDelete = () => {
        const newList = playlists.filter((playlist) => playlist.playlistName !== playlistName);
        setPlaylists(newList);
        if (playlistName === currPlaylistDisplaying) {
            setCurrPlaylistDisplaying(""); 
            setHeader(["Home Page"]);
            setDisplaySongs([]);
        }
    }
    const displayPlaylist = () => {
        setCurrPlaylistDisplaying(playlistName);
        setHeader([playlistName]);
        setDisplaySongs(loadSongs("user", playlistName));
    }   
    return (
        <div>
            <button className="sidebar-playlist-button" onClick={displayPlaylist}>{playlistName}</button>
            <button className="sidebar-delete-button" onClick={handleDelete}>-</button>
        </div>
    );
}

export default SidebarPlaylist;