// Define the function makeAlbum that builds an object describing a music album
function makeAlbum(artist, title, tracks) {
    // Create an object containing artist and title information
    var album = {
        artist: artist,
        title: title
    };
    // If tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function makeAlbum to create three different albums
var album1 = makeAlbum("Artist1", "Album1");
var album2 = makeAlbum("Artist2", "Album2", 12);
var album3 = makeAlbum("Artist3", "Album3");
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
