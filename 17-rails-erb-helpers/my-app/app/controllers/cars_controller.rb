class CarsController < ApplicationController

    # skip_before_action :verify_authenticity_token  

    def index
        @cars = Car.all
    end

    def new 

    end

    def edit 
        @car = Car.find(params[:id])
        @drivers = Driver.all
        @makes = Make.all
    end

    def create
        Car.create(car_params[:car])
        redirect_to cars_path
    end

    def update
        @car = Car.find(params[:id])
        @car.update(car_params[:car])
        redirect_to cars_path
    end

    def car_params
        params.permit(
            car: [
                :make_id,
                :model,
                :color,
                driver_ids: []
            ]
        )
    end

end