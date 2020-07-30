class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.integer :track_id
      t.string :title_short
      t.integer :artist_id
      t.string :artist_name
      t.integer :album_id
      t.string :album_title
      t.string :album_cover
      t.integer :duration
      t.string :release_date

      t.timestamps
    end
  end
end
