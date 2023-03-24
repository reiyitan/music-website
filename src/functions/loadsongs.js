/**
 * Returns a list where each element contains song information.
 * Each song contains title, artist, album, length.
 * 
 * @param user - The owner of the playlist.
 * @param playlist - The title of the playlist.
 */
export function loadSongs(user, playlistName) {
    //TODO: actually get the songs from the backend
    console.log(playlistName);
    return (
        [
            {"title":"song1", "artist":"artist1", "album":"album1", "length":"1:23"},
            {"title":"song1", "artist":"artist2", "album":"album2", "length":"1:23"},
            {"title":"song1", "artist":"artist3", "album":"album3", "length":"1:23"},
            {"title":"song1", "artist":"artist4", "album":"album14", "length":"1:23"},
        ]
    )
}