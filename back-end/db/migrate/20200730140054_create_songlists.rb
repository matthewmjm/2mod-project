class CreateSonglists < ActiveRecord::Migration[6.0]
  def change
    create_table :songlists do |t|
      t.string :list_name
      t.references :user, foreign_key: true, null: false
      t.references :song, foreign_key: true, null: false

      t.timestamps
    end
  end
end
