const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${id}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "44ef2a222amshf93b43e1eddc982p14611djsn4704c9571d3a"
    }
})
    .then(response => response.json())
    .then(result => renderAlbum(result))

function renderAlbum(album) {
    const albumTitle = document.getElementById('album-title')
    albumTitle.innerText = `Album: ${album.title}`
    albumTitle.style.color = "orangered"

    const albumReleaseDate = document.getElementById('release-date')
    albumReleaseDate.innerText = `Release Date: ${album.release_date}`
    albumReleaseDate.style.color = "orange"

    const coverArt = document.getElementById('album-cover')
    coverArt.setAttribute('src', album.cover_big)
    console.log(album)


}
