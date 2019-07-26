class UsersController < ApplicationController
    
    skip_before_action  :define_current_user, only: [ :authenticate ]
    
    def create
        user = User.create(user_params)
        render json: user
    end
    

    def authenticate
        user = User.find_by(name: params[:name])
        
        if user != nil && user.authenticate(params[:password])
            render json: user, methods: [ :auth_token ]
        else
            render json: { error: true, message: 'Login Failed' }
        end
    end
    
    
    def user_params
        params.permit(:name, :password)
    end
    
end