class Switch < ApplicationRecord
  has_many :permissions

  belongs_to :configuration_format, optional: true

  validates :key, presence: true, uniqueness: true, length: { minimum: 3 }, format: { with: /\A[a-zA-Z0-9_]+\z/ }
end
