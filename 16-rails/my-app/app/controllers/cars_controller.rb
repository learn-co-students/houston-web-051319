class CarsController < ApplicationController

    skip_before_action :verify_authenticity_token  

    def index
        @cars = Car.all
    end

    def new 

    end

    def edit 
        @car = Car.find(params[:id])
        @drivers = []
    end

    def create
        Car.create(car_params[:car])
        redirect_to cars_path
    end

    def update
        redirect_to cars_path
    end

    def car_params
        params.permit(
            car: [
                :make,
                :model,
                :color
            ]
        )
    end

end