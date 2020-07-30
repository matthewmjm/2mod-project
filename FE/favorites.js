// const renderTrack = document.getElementById('track-id')
// dataTrack(addFavorite)

let body = { list_name: 'list_name', user_id: 1, song_id: 1 }

// renderTrack.onsubmit = function (e) {
//     e.preventDefault()
//     const addFavorite = document.getElementById('track-title').value
//     getArtistsTracks(addFavorite)
// }
fetch('http://localhost:3000/songlists', {

    method: "POST",
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response = response.json())
    .then(result = dataTrack(result))

function dataTrack(track) {
    const trackTitle = document.getElementById('track-title')
    trackTitle.innerText = track.id
}

