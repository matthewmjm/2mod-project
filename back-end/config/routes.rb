Rails.application.routes.draw do
  resources :songlists, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create]
  resources :songs, only: [:index, :show, :create]
  post "user", to: "users#login"
  post "song", to: "songs#favorite"
  get "favorites/:id", to: "songs#songlist"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


# Rails.application.routes.draw do
#   get "dogs", to: "dogs#index"
#   get "dogs/:id", to: "dogs#show"
#   delete "dogs/:id:", to: "dogs#destroy"
#   update "dogs/:id", to: "dogs#update"
#   post "dogs", to: "dogs#create"
# end