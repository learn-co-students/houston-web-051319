class Airlines < ActiveRecord::Migration[5.2]
  def change
    create_table :airlines do | t |
      t.string :name
    end
  end
end
