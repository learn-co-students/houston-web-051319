require_relative './config/environment'
use Rack::PostBodyContentTypeParser
use Rack::MethodOverride
use ApplicationController
run Sinatra::Application