class Actor < ApplicationRecord
  validates :app_id, presence: true, length: { minimum: 1 }
end
