class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :model
      t.belongs_to :make
      t.integer :total_mileage
      t.string :color 
      t.string :horse_power
      t.timestamps
    end
  end
end
