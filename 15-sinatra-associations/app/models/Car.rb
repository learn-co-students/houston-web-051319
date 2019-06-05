class Car < ActiveRecord::Base
    has_many :drive_sessions, dependent: :destroy
    has_many :drivers, through: :drive_sessions
end