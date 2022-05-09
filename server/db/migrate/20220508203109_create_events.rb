class CreateEvents < ActiveRecord::Migration[6.1]
  def up
    create_table :events, id: :uuid do |t|
      t.string :key, null: false
      t.jsonb :payload, null: false, default: {}

      t.timestamps
    end

    add_index :events, :key
    execute "ALTER TABLE events ADD CONSTRAINT events_key_length CHECK (length(key) >= 1)"
  end

  def down
    drop_table :events
  end
end
