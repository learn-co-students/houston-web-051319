class ApplicationController < Sinatra::Base

    set :views, './app/views'

    # Index
    get '/cars' do
        @cars = Car.all
        erb :index
    end


    # CREATING A CAR
        # New
        get '/cars/new' do 
            erb :new # <- Sends the form
        end


        # Create
        post '/cars' do # <- The Form submits here
            Car.create(params)
        end


    # UPDATING A CAR        
        # Edit
        get '/cars/:id/edit' do
            @car = Car.find(params[:id])
            erb :edit # <- Sends the form
        end

        # Update
        patch '/cars/:id' do # <- 
            car = Car.find(params[:id])
            car.update(make: params[:make])
        end
    
    # Show
    get '/cars/:id' do 
        @car = Car.find(params[:id])
        erb :show
    end

end

