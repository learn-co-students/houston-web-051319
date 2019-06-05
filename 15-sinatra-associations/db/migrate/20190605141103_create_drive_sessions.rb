class CreateDriveSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :drive_sessions do | t |
      t.integer :driver_id
      t.integer :car_id
    end
  end
end
