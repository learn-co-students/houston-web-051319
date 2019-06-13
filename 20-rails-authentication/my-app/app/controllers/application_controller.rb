class ApplicationController < ActionController::Base

    before_action :current_driver

    def current_driver
        @current_driver = Driver.find(session[:driver_id])
    end

end
