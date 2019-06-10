class Car < ApplicationRecord
    belongs_to :make
    has_many :rides
    has_many :drivers, through: :rides
    
end
