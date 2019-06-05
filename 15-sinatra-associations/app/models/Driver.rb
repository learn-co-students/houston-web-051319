class Driver < ActiveRecord::Base
    has_many :drive_sessions, dependent: :destroy
    has_many :cars, through: :drive_sessions
end