class DriversController < ApplicationController 

    def display_login_form

    end

    def authenticate
        # The username the use wrote to find the user 
        driver= Driver.find_by(name: params[:name])
        # Then check if the password they wrote was correct
        if driver != nil && driver.authenticate( params[:password] )
             # If it was, save the users id in the session
            session[:driver_id] = driver.id
            redirect_to "/cars"
        else 
            # oops
        end
    end

end