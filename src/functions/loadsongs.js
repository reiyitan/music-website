/**
 * Returns a list where each element contains song information.
 * Each song contains title, artist, album, length.
 * 
 * @param user - The owner of the playlist.
 * @param playlist - The title of the playlist.
 */
export function loadSongs(user, playlist) {
    //TODO: actually get the songs from the backend
    return (
        [
            {"title":"song1", "artist":"artist1", "album":"album1", "length":"12:34"},
            {"title":"song2", "artist":"artist2", "album":"album2", "length":"2:23"},
            {"title":"song3", "artist":"artist3", "album":"album3", "length":"0:33"},
            {"title":"song 4", "artist":"some artist", "album":"some album", "length":"4:13"},
            {"title":"another song", "artist":"another artist", "album":"another album", "length":"1:31"},
            {"title":"final song", "artist":"final artist", "album":"final album", "length":"5:12"},
            {"title":"song1", "artist":"artist1", "album":"album1", "length":"12:34"},
            {"title":"song2", "artist":"artist2", "album":"album2", "length":"2:23"},
            {"title":"song3", "artist":"artist3", "album":"album3", "length":"0:33"},
            {"title":"song 4", "artist":"some artist", "album":"some album", "length":"4:13"},
            {"title":"another song", "artist":"another artist", "album":"another album", "length":"1:31"},
            {"title":"final song", "artist":"final artist", "album":"final album", "length":"5:12"},
            {"title":"song1", "artist":"artist1", "album":"album1", "length":"12:34"},
            {"title":"song2", "artist":"artist2", "album":"album2", "length":"2:23"},
            {"title":"song3", "artist":"artist3", "album":"album3", "length":"0:33"},
            {"title":"song 4", "artist":"some artist", "album":"some album", "length":"4:13"},
            {"title":"another song", "artist":"another artist", "album":"another album", "length":"1:31"},
            {"title":"final song", "artist":"final artist", "album":"final album", "length":"5:12"},
            {"title":"song1", "artist":"artist1", "album":"album1", "length":"12:34"},
            {"title":"song2", "artist":"artist2", "album":"album2", "length":"2:23"},
            {"title":"song3", "artist":"artist3", "album":"album3", "length":"0:33"},
            {"title":"song 4", "artist":"some artist", "album":"some album", "length":"4:13"},
            {"title":"another song", "artist":"another artist", "album":"another album", "length":"1:31"},
            {"title":"final song", "artist":"final artist", "album":"final album", "length":"5:12"},
            {"title":"song1", "artist":"artist1", "album":"album1", "length":"12:34"},
            {"title":"song2", "artist":"artist2", "album":"album2", "length":"2:23"},
            {"title":"song3", "artist":"artist3", "album":"album3", "length":"0:33"},
            {"title":"song 4", "artist":"some artist", "album":"some album", "length":"4:13"},
            {"title":"another song", "artist":"another artist", "album":"another album", "length":"1:31"},
            {"title":"final song", "artist":"final artist", "album":"final album", "length":"5:12"}
        ]
    );
}