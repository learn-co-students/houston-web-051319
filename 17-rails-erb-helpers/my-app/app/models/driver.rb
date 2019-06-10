class Driver < ApplicationRecord
    has_many :rides
    has_many :cars, through: :rides
end
