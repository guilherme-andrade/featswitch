class Event < ApplicationRecord
  validates :key, presence: true, length: { minimum: 1 }
end
