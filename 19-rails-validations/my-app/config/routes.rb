Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :cars, only: [ :index, :new, :edit, :create, :update]

  get '/cars/:id/total_mileage/increment', to: 'cars#increment_total_mileage'

  get '/cars/:id/total_mileage/decrement', to: 'cars#decrement_total_mileage'

  # get '/cars', to: 'cars#index'

  # get '/cars/:id', to: 'cars#show'
  
  # get '/cars/new', to: 'cars#new'

  # get '/cars/:id/edit', to: 'cars#edit'

  # post '/cars', to: 'cars#create'

  # patch '/cars/:id', to: 'cars#update'

  # delete '/cars/:id', to: 'cars#destroy'




end
