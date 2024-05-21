
function make_album ( artist_name : string , album_title : string , tracks?: number){
    let album : {artist: String , title : string , tracks?: number} = {
        artist : artist_name,
        title : album_title,
    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
// calling  function and variable  with different values
let album1 = make_album ("Emaan" , "Album title 1");

// calling function with third parameter
let album2 = make_album ("Azha", "Album title 2" , 15);

// calling  function and variable  with different values
let album3 = make_album ("Maryam" , "Album title 3");

// print values
console.log (album1);
console.log (album2);
console.log (album3); 
