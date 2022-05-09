class ConfigurationFormat < ApplicationRecord
  has_many :switches

  validates :name, presence: true, uniqueness: true, length: { minimum: 3 }
end
