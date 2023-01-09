Rails.application.routes.draw do
  resources :products do
    collection do
      post :search
    end
    get :text, on: :member
  end
  get 'home/index'
  root 'home#index'
end
