class Comment < ApplicationRecord
  belongs_to :event, optional: true
  belongs_to :user, optional: true

  validates  :event, presence: true
  validates :body, presence: true

  validates :user_name, presence: true, unless: Proc.new{ |u| u.user.present? }

  def user_name
    if user.present?
      user.name
    else
      super
    end
  end
end
