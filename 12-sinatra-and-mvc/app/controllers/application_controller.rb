class ApplicationController < Sinatra::Base

    set :views, './app/views'

    # Index
    get '/cars' do
        car_names = Car.all.map do | car |
            "#{car.make} #{car.model}"
        end
        car_names.join(', ')
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

