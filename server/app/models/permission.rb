class Permission < ApplicationRecord
  belongs_to :switch

  validates :name, presence: true, uniqueness: { scope: [:switch_id] }, length: { minimum: 3 }
end
