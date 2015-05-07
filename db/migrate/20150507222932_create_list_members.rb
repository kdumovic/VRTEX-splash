class CreateListMembers < ActiveRecord::Migration
  def change
    create_table :list_members do |t|
      t.string :email
    end
  end
end
