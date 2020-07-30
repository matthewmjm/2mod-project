const trackList = document.getElementById('track-list')
const artistSearch = document.getElementById('artist-search')

artistSearch.onsubmit = function (e) {
	e.preventDefault()
	const artistInput = document.getElementById('artist').value
	getArtistsTracks(artistInput)
}
function dataHandler(tracks) {
	tracks.data.forEach(track => {
		const cardContainer = document.getElementById('card-container')
		const cardTemplate = document.createElement('div')


		cardTemplate.innerHTML = `
			<div class="col-4">
				<div class="card" style="width: 18rem;">
					<img src="${track.album.cover_medium}" class="card-img-top" alt="album cover">
						<div class="card-body">
							
							<h6 class="card-title">${track.title}</h6>
							<a href="show.html?id=${track.id}" class="btn btn-primary">Song Info</a>
							<a href="albumshow.html?id=${track.album.id}" class="btn btn-primary">Album Info</a>
						</div>
				</div>
			</div>
			`
		cardContainer.appendChild(cardTemplate)

	})
}
function getArtistsTracks(artistName) {
	fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
			'x-rapidapi-key': '44ef2a222amshf93b43e1eddc982p14611djsn4704c9571d3a'
		},
	})
		.then((response) => response.json())
		.then(result => dataHandler(result))
}