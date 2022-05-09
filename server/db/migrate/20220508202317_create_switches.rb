class CreateSwitches < ActiveRecord::Migration[6.1]
  def up
    create_table :switches, id: :uuid do |t|
      t.string :key, null: false
      t.jsonb :configuration
      t.boolean :configurable, null: false, default: false

      t.timestamps
    end

    add_index :switches, :key, unique: true
    execute "ALTER TABLE switches ADD CONSTRAINT switches_key_length CHECK (length(key) >= 3)"
  end

  def down
    drop_table :switches
  end
end
