import React from "react"; 
import MainPanelPlaylist from "./MainPanelPlaylist"; 
import { loadSongs } from "../functions/loadsongs";

/**
 * Component for creating a playlist in the Sidebar. 
 * 
 * @param playlistName - The name of the playlist.
 * @param playlists - The list of playlists in the Sidebar. 
 * @param setPlaylists - Used to update state of Sidebar playlists when deleting a playlist.
 * @param songs - A list of songs in the playlist.
 * @param setMainPanel - Used to update state of main panel to display a playlist.
 */
const SidebarPlaylist = ({playlistName, playlists, setPlaylists, songs, setMainPanel}) => {
    const handleDelete = () => {
        const newList = playlists.filter((playlist) => playlist.playlistName !== playlistName);
        setPlaylists(newList);
    }
    const displayPlaylist = () => {
        setMainPanel(
            <MainPanelPlaylist 
                playlistName={playlistName}
                songs={loadSongs("user", playlistName)}
            />
        );
    }   
    return (
        <div>
            <button className="sidebar-playlist-button" onClick={displayPlaylist}>{playlistName}</button>
            <button className="sidebar-delete-button" onClick={handleDelete}>-</button>
        </div>
    );
}

export default SidebarPlaylist;