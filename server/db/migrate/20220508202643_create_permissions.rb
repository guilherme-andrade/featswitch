class CreatePermissions < ActiveRecord::Migration[6.1]
  def up
    create_table :permissions, id: :uuid do |t|
      t.references :switch, null: false, foreign_key: true, type: :uuid
      t.string :name, null: false
      t.jsonb :configuration
      t.jsonb :rules_ast, null: false, default: []

      t.timestamps
    end

    add_index :permissions, [:switch_id, :name], unique: true
    execute "ALTER TABLE permissions ADD CONSTRAINT permissions_name_length CHECK (length(name) >= 3)"
  end

  def down
    drop_table :permissions
  end
end
