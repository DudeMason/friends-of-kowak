Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :pages
    resources :receipt_sender, only: [:create]
    resources :password_reset_sender, only: [:create]
    resources :users do
      resources :permissions
    end
  end

  get '*other', to: 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
