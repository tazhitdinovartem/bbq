class User < ApplicationRecord
  EMAIL_VALIDATION_REGEXP = /.+@.+\..+/i
  has_many :events
  validates :name, presence: true, length: { maximum: 35 }
  validates :email, uniqueness: true, presence: true, length: { maximum: 100 }, format: { with: EMAIL_VALIDATION_REGEXP }
end
