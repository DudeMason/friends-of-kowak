class CreatePages < ActiveRecord::Migration[6.0]
  def change
    create_table :pages do |t|
      t.string :text1
      t.string :text2
      t.string :text3
      t.string :text4
      t.string :text5
      t.string :text6
      t.string :text7
      t.string :text8
      t.string :text9

      t.timestamps
    end
  end
end
