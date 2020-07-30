class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, include: [:songs]
    end

    def show
        @user = User.find(params[:id])
        render json: @user, include: [:songs]
    end 
    
    def create
        @user = User.create(
            user_name: params[:user_name],
            user_password: params[:user_password]
        )
        render json: @user
    end 

    # def update
    #     @user = User.find(params[:id])
    #     @user.update(
    #         user_name: params[:user_name],
    #         user_password: params[:user_password]
    #     )
    #     render json: @user
    # end
     
    # def destroy
    #     @user = User.find(params[:id])
    #     @user.destory
    #     render status: no_content
    # end

end
