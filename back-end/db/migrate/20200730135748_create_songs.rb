class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.integer :track_id
      t.string :title_short
      t.string :artist_name
      t.integer :user_id 
      
      t.string :album_cover
    

      t.timestamps
    end
  end
end
