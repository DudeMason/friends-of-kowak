class CreatePermissions < ActiveRecord::Migration[6.0]
  def change
    create_table :permissions do |t|
      t.string :description
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
