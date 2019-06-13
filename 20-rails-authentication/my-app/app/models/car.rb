class Car < ApplicationRecord
    belongs_to :make
    has_many :rides
    has_many :drivers, through: :rides

    validates :total_mileage, numericality: { greater_than_or_equal_to: 0}

    # validate :total_mileage_must_be_greater_than_zero

    # def total_mileage_must_be_greater_than_zero
    #    # self === instance of a car
    #    if self.total_mileage < 0
    #     self.errors.add(:total_mileage, "Total mileage cannot be negative.")
    #    end
    # end
    
end
