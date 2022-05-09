class CreateActors < ActiveRecord::Migration[6.1]
  def up
    create_table :actors, id: :uuid do |t|
      t.string :app_id, null: false
      t.jsonb :attributes, null: false, default: {}

      t.timestamps
    end

    add_index :actors, [:app_id, :attributes], unique: true
    add_index :actors, :app_id, unique: true
    execute "ALTER TABLE actors ADD CONSTRAINT actors_app_id_length CHECK (length(app_id) >= 1)"
  end

  def down
    drop_table :actors
  end
end
