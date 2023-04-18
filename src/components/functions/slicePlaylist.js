import { default as loadPlaylistSongs } from "./loadPlaylistSongs";
/**
 * Takes a playlist and searches the playlist in order for a song. 
 * Once the song is found, the function returns the rest of the songs
 * in the playlist not including the specified song.
 * 
 * @param user - The user of the playlist to search.
 * @param playlistName - The name of the playlist to search.
 * @param song - The song to be searched for.
 * 
 * @returns The sliced playlist.
 */
export default function slicePlaylist(
    user, 
    playlistName,
    song
) {
    let playlist = loadPlaylistSongs(user, playlistName);
    for (let i = 0; i < playlist.length; i++) {
        let currSong = playlist[i]; 
        if (
            currSong.title === song.title
            && currSong.artist === song.artist 
            && currSong.album === song.album
            && currSong.length === song.length
        ) {
            return playlist.slice(i + 1);
        }
    }
}