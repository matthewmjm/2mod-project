class SongsController < ApplicationController

    def index
        @songs = Song.all
        render json: @songs, include: [:users]
    end

    def show
        @song = Song.find(params["id"])
        render json: @song, include: [:users]
    end 
    
    def create
        @song = Song.create(
            track_id: params["track_id"],
            title_short: params["title_short"],
            artist_id: params["artist_id"],
            artist_name: params["artist_name"],
            album_id: params["album_id"],
            album_title: params["album_title"],
            album_cover: params["album_cover"],
            duration: params["duration"],
            release_date: params["release_date"]
        )
        render json: @song
    end 

    # def update
    #     @song = Song.find(params[:id])
    #     @song.update(
    #         track_id: params[:track_id],
    #         title_short: params[:title_short],
    #         artist_id: params[:artist_id],
    #         artist_name: params[:artist_name],
    #         album_id: params[:album_id],
    #         album_title: params[:album_title],
    #         album_cover: params[:album_cover],
    #         duration: params[:duration],
    #         release_date: params[:release_date]
    #     )
    #     render json: @song
    # end
     
    # def destroy
    #     @song = Song.find(params[:id])
    #     @song.destory
    #     render status: no_content
    # end

end
