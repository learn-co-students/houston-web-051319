class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do | table |
      table.string :make
      table.string :model
      table.string :color
      table.string :horse_power
    end
  end
end
