class ApplicationController < Sinatra::Base

    get '/message' do 
        '<a href="http://10.185.3.47:9393/message">Link Text</a>'
    end

end