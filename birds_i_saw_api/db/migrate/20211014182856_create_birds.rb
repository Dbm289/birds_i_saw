class CreateBirds < ActiveRecord::Migration[6.1]
  def change
    create_table :birds do |t|
      t.string :name
      t.string :last_seen_on
      t.string :location_seen
      t.integer :times_seen
      t.integer :quality_of_sightings
      t.boolean :favorite

      t.timestamps
    end
  end
end
