class ApplicationController < Sinatra::Base

    set :views, './app/views'

    # Index
    get '/cars' do
        @cars = Car.all
        erb :index
    end
    
    # Show
    get '/cars/:id' do 
        @car = Car.find(params[:id])
        erb :show
    end

    # Update
    patch '/cars/:id' do 
        car = Car.find(params[:id])
        car.update(make: params[:make])
    end

end

