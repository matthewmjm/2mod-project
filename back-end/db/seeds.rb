# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Songlist.destroy_all
User.destroy_all
Song.destroy_all


user1 = User.create(user_name: 'Dean Rubio', user_password: 'password')
user2 = User.create(user_name: 'Heather Neville', user_password: 'password')
user3 = User.create(user_name: 'Pierre Farrington', user_password: 'password')
user4 = User.create(user_name: 'Joe Smoe', user_password: 'password')

song1 = Song.create(
    track_id: 83925001,
    title_short: 'Marry The Night',
    artist_id: 75491,
    artist_name: 'Lady Gaga',
    album_id: 8447093,
    album_title: 'Born This Way (Special Edition)',
    album_cover: 'https://api.deezer.com/album/8447093/image',
    duration: 264,
    release_date: '2011-05-23'
)

song2 = Song.create(
    track_id: 75800620,
    title_short: 'First Day Of My Life',
    artist_id: 947,
    artist_name: 'Bright Eyes',
    album_id: 7509779,
    album_title: 'I'm Wide Awake, It's Morning',
    album_cover: 'https://api.deezer.com/album/7509779/image',
    duration: 188,
    release_date: '2015-02-22'
)

song3 = Song.create(
    track_id: 135376666,
    title_short: 'Edge of Seventeen',
    artist_id: 209,
    artist_name: 'Stevie Nicks',
    album_id: 14459672,
    album_title: 'Bella Donna (Deluxe Edition)',
    album_cover: 'https://api.deezer.com/album/14459672/image',
    duration: 329,
    release_date: '2016-11-04'
)

song4 = Song.create(
    track_id: 509938382,
    title_short: 'Roulette',
    artist_id: 144227,
    artist_name: 'Katy Perry',
    album_id: 65278322,
    album_title: 'Witness (Deluxe)',
    album_cover: 'https://api.deezer.com/album/65278322/image',
    duration: 198,
    release_date: '2018-06-08'
)
song5 = Song.create(
    track_id: 1109956,
    title_short: 'Read My Mind',
    artist_id: 897,
    artist_name: 'The Killers',
    album_id: 119617,
    album_title: 'Sams Town',
    album_cover: 'https://api.deezer.com/album/119617/image',
    duration: 246,
    release_date: '2006-10-12'
)
song6 = Song.create(
    track_id: 7675133,
    title_short: 'Jeremy',
    artist_id: 1319,
    artist_name: 'Pearl Jam',
    album_id: 708674,
    album_title: 'Ten',
    album_cover: 'https://api.deezer.com/album/708674/image',
    duration: 318,
    release_date: '1992-01-14'
)

songlist1 = Songlist.create(list_name: 'Joes List', user_id: user1, song_id: song1)
songlist2 = Songlist.create(list_name: 'Deans List', user_id: user1, song_id: song1)
songlist3 = Songlist.create(list_name: 'Heathers List', user_id: user2, song_id: song4)
songlist4 = Songlist.create(list_name: 'Heathers List', user_id: user2, song_id: song5)
songlist5 = Songlist.create(list_name: 'Pierres List', user_id: user3, song_id: song2)
songlist6 = Songlist.create(list_name: 'Pierres List', user_id: user3, song_id: song3)



