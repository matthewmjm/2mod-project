const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${id}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "x-rapidapi-key': 'b4897ede89mshd44d8ab2a2ed5cdp17fbd6jsn348bf49ea11e'
    }
})
    .then(response => response.json())
    .then(result => renderTrack(result))
function renderTrack(track) {
    const trackTitle = document.getElementById('track-title')
    trackTitle.innerText = track.title
    const preview = document.getElementById('track-preview')
    preview.setAttribute('src', track.preview)
    // document.body.append(trackTitle, preview)
    const coverArt = document.getElementById('track-cover')
    coverArt.setAttribute('src', track.album.cover_big)
    console.log(track)
}