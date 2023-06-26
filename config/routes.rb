Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/shops', to: 'homes#index'
  get '/shops/new', to: 'homes#authorized'
  get '/shops/:id', to: 'homes#index'
  get '/shops/:id/reviews', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :shops, only: [:index, :show, :create] do
        resources :reviews, only: [:create]
      end
    end
  end
end
