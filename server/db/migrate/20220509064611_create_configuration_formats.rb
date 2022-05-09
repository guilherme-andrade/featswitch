class CreateConfigurationFormats < ActiveRecord::Migration[6.1]
  def up
    create_table :configuration_formats, id: :uuid do |t|
      t.jsonb :validation_json, null: false, default: {}
      t.string :name, null: false

      t.timestamps
    end

    add_reference :switches, :configuration_format
    add_index :configuration_formats, :name, unique: true
    add_index :configuration_formats, :validation_json, unique: true
    execute "ALTER TABLE configuration_formats ADD CONSTRAINT configuration_formats_name_length CHECK (length(name) >= 1)"
  end

  def down
    drop_table :configuration_formats
  end
end
