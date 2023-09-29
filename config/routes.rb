Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/shops', to: 'homes#index'
  get '/shops/new', to: 'homes#authorized'
  get '/shops/:id', to: 'homes#index'
  get '/shops/:id/reviews', to: 'homes#index'
  # A catch-all route to serve the main HTML file
  get "*path", to: "homes#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  namespace :api do
    namespace :v1 do
      resources :shops, only: [:index, :show, :create] do
        resources :reviews, only: [:create]
      end

      devise_scope :user do
        get 'check', to: 'check#check'
        post 'sign_up', to: 'registrations#create'
        post 'sign_in', to: 'sessions#create'
      end

      # Include profile_photos as a nested resource under users
      resources :users, only: [] do
        resource :profile_photo, only: [:show, :update]
      end
    end
  end
end
