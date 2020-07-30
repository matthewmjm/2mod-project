class SonglistsController < ApplicationController

    def index
        @songlists = Songlist.all
        render json: @songlists
    end

    def show
        @songlist = Songlist.find(params["id"])
        render json: @songlist
    end 
    
    def create
        @songlist = Songlist.create(
            list_name: params["list_name"],
            user_id: params["user_id"],
            song_id: params["song_id"]
        )
        render json: @songlist
    end 

    # def update
    #     @songlist = Songlist.find(params[:id])
    #     @songlist.update(
    #         list_name: params[:list_name],
    #         user_id: params[:user_id],
    #         song_id: params[:song_id]
    #     )
    #     render json: @songlist
    # end
     
    # def destroy
    #     @songlist = Songlist.find(params[:id])
    #     @songlist.destory
    #     render status: no_content
    # end

end
