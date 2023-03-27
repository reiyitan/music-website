/**
 * Loads the songs within a specified playlist.
 * Each song contains title, artist, album, length.
 * 
 * @param user - The owner of the playlist.
 * @param playlistName - The title of the playlist.
 * 
 * @returns A list of the songs in the playlist.
 */
export default function loadPlaylistSongs(user, playlistName) {
    //TODO: actually get the songs from the backend
    if (playlistName === "a") {
        return (
            [
                {"title":"fergsrt", "artist":"arsdfsdfsdfsdf", "album":"alsdfsdfsdfsdfsdfm1", "length":"1sdfsdfds:23"},
                {"title":"sonyhgtyghtdhfdjkfsjkdfnjknsdjkfnksjdnsdfnksdnjsdnjknsdknjknjkdnjksdnjknjksdnfjksjdnkfgdgdfgdfg1", "artist":"arergergergergergist2", "album":"asdfsdfsdfsdfsd", "length":"1:23"},
                {"title":"soergtydyubfhyjfb yuj1", "artist":"adfgdnfsdnfjknsdfnjksdnfksndjkfeyuigbtg r tg rthjg sdkfnsjkndfjknsdknfkjnsdjkfnfgt3", "album":"aldfgdfgud", "length":"1:2sdfsd3"},
                {"title":"sdfgdfgdfgdfgng1", "artist":"artgdfgdfbtybtybt4", "album":"aldfgdfgfdum14", "length":"1:2sdfsdf3"},
            ]
        )
    }
    return (
        [
            {"title":"song1", "artist":"artist1", "album":"album1", "length":"1:23"},
            {"title":"song1", "artist":"artist2", "album":"album2", "length":"1:23"},
            {"title":"song1", "artist":"artist3", "album":"album3", "length":"1:23"},
            {"title":"song1", "artist":"artist4", "album":"album14", "length":"1:23"},
        ]
    )
}