Rails.application.routes.draw do
  resources :songlists, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create]
  resources :songs, only: [:index, :show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
