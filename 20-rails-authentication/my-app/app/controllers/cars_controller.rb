class CarsController < ApplicationController

    # skip_before_action :verify_authenticity_token  

    def index
        @cars = Car.all
    end

    def new 

    end

    def edit 
        if(flash[:form_errors])
            @errors = flash[:form_errors]
        else
            @errors = {
                "total_mileage" => []
            }
        end
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
        if @current_driver.cars.include?(@car)
            @car.assign_attributes(car_params[:car])
            if @car.valid?
                @car.save
                redirect_to cars_path
            else
                flash[:form_errors] = @car.errors.messages
                redirect_to "/cars/#{@car.id}/edit"
            end
        else
            # Nope
        end
    end

    def increment_total_mileage
        @car = Car.find(params[:id])
        @car.total_mileage += 1
        @car.save
        redirect_to cars_path
    end

    def decrement_total_mileage
        @car = Car.find(params[:id])
        @car.total_mileage -= 1
        @car.save
        redirect_to cars_path
    end


    def car_params
        params.permit(
            car: [
                :make_id,
                :total_mileage,
                :model,
                :color,
                driver_ids: []
            ]
        )
    end

end