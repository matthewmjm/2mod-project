const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${id}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "44ef2a222amshf93b43e1eddc982p14611djsn4704c9571d3a"
    }
})
    .then(response => response.json())
    .then(result => renderTrack(result))

function renderTrack(track) {
    const trackTitle = document.getElementById('track-title')
    trackTitle.innerText = `Song Name: ${track.title}`
    trackTitle.style.color = "white"

    const preview = document.getElementById('track-preview')
    preview.setAttribute('src', track.preview)
    preview.style.alignSelf = "center"
    // document.body.append(trackTitle, preview)

    const coverArt = document.getElementById('track-cover')
    coverArt.setAttribute('src', track.album.cover_big)



    console.log(track)
}

