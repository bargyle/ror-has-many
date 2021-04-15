Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :simons do
      resources :dpls
    end
    get 'simonUsers', to: 'simons#Users'
    get 'dplUsers', to: 'dpls#dplUsers'
  end
end