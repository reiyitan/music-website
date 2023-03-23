import React from "react"; 
import Song from "./Song";

const Header = ({playlistName}) => {
    return (
        <div className="playlist-header">
            {playlistName}
        </div>
    );
}

/**
 * Component used to display the contents of a playlist on the mainPanel.
 * 
 * @param playlistName - The name of the playlist.
 * @param songs - The list of songs that the playlist contains. 
 * 
 * @returns The component to be displayed on the mainPanel;
 */
const MainPanelPlaylist = ({playlistName, songs}) => {
    console.log(songs);
    return (
        <div className="main-panel">
            <Header playlistName={playlistName} />
            <div className="song-list">
                {songs.map((song) => (
                    <Song
                        key={`${song.title}${song.artist}${song.album}${song.length}`}
                        title={song.title}
                        artist={song.artist}
                        album={song.album}
                        length={song.length}
                    />
                ))}
            </div>
        </div>
    );
}

export default MainPanelPlaylist; 