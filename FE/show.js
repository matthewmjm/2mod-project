const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
let song = {}

const modalBody = document.querySelector(".modal-body")

fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${id}`, {
    method: 'GET',
    headers: {
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


    song = track
    // console.log(track)
}
const favoriteButton = document.querySelector('.favorite-button')

favoriteButton.addEventListener("click", (e) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('token'))

    fetch(`http://localhost:3000/song`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            track_id: song.id,
            title_short: song.title_short,
            artist_name: song.artist.name,
            user_id: user.id,
            album_cover: song.album.cover_small
        })
    })
        .then(response => response.json())
        .then(song => {
            // const $h5 = document.createElement('h5')
            // const img = document.createElement('img')
            // $h5.innerHTML = `<a href="show.html?id=${id}">Song: ${song.title}</a >`
            // modalBody.append($h5)
        }
        )
})

const myFavoritesButton = document.getElementById('my-favorites')

myFavoritesButton.addEventListener("click", (e) => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('token'))
    fetch(`http://localhost:3000/favorites/${user.id}`, {
        method: 'GET',
    })

        .then(response => response.json())
        .then(favorites => {
            favorites.song.forEach(song => {
                const $h5 = document.createElement('h5')
                const img = document.createElement('img')
                img.setAttribute('src', song.album_cover)
                $h5.innerHTML = `<a href="show.html?id=${song.track_id}">Song: ${song.title_short}</a >`
                modalBody.append($h5, img)
            })
        })
})
