
class Make 

    @@all = []
    attr_reader :name, :id

    def initialize(attributes)
        @id = @@all.length + 1
        @name = attributes[:name]
        @@all << self
    end

    def self.all 
        @@all
    end

end

Make.new( name: 'Toyota')
Make.new( name: 'Audi')
Make.new( name: 'Ford')

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
            @drivers = Driver.all
            @car = Car.find(params[:id])
            erb :edit # <- Sends the form
        end

        # Update
        patch '/cars/:id' do # <- 
            car = Car.find(params[:id])
            car.update(params[:car])
        end
    
    # Show
    get '/cars/:id' do 
        @car = Car.find(params[:id])
        erb :show
    end


    patch '/drivers/:id' do 
        @driver = Driver.find(params[:id])
        @driver.update(params)
    end

end

