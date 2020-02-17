class Subscription < ApplicationRecord
  belongs_to :event
  belongs_to :user, optional: true

  validates :event, presence: true

  validates :user_name, presence: true, unless: Proc.new{ |u| u.user.present? }
  validates :user_email, presence: true, length: { maximum: 255 }, unless: Proc.new{ |u| u.user.present? }

  validates :user, uniqueness: { scope: :event_id }, if: Proc.new{ |u| u.user.present? }
  validates :user_email, uniqueness: {scope: :event_id}, unless: Proc.new{ |u| u.user.present? }
  validate :check_email_attachment, unless: Proc.new { |u| u.user.present? }

  def check_email_attachment
    if User.where(email: user_email).exists? 
      errors.add(:email, 'уже используется')
    end
  end

  def user_name
    if user.present?
      user.name
    else
      super
    end
  end

  def user_email
    if user.present?
      user.email
    else
      super
    end
  end
end
