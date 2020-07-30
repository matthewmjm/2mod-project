const trackList = document.getElementById('track-list')
const artistSearch = document.getElementById('artist-search')
artistSearch.onsubmit = function (e) {
    e.preventDefault()
    const artistInput = document.getElementById('artist').value
    getArtistsTracks(artistInput)
}
function dataHandler(tracks) {
    tracks.data.forEach(track => {
        const li = document.createElement('li')
        li.innerHTML = `<a href="show.html?id=${track.id}">${track.title}</a>`
        trackList.append(li)
    })
}
function getArtistsTracks(artistName) {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',

        },
    })
        .then((response) => response.json())
        .then(result => dataHandler(result))
}