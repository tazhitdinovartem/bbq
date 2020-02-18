class Subscription < ApplicationRecord
  belongs_to :event
  belongs_to :user, optional: true

  validates :event, presence: true

  validates :user_name, presence: true, unless: Proc.new{ |u| u.user.present? }
  validates :user_email, presence: true, length: { maximum: 255 }, unless: Proc.new{ |u| u.user.present? }

  validates :user, uniqueness: { scope: :event_id }, if: Proc.new{ |u| u.user.present? }
  validates :user_email, uniqueness: {scope: :event_id}, unless: Proc.new{ |u| u.user.present? }
  validate :check_email_attachment, unless: Proc.new { |u| u.user.present? }
  validate :can_user_subscribe?, if: Proc.new { |u| u.user.present? }



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

  private

  def can_user_subscribe?
    if event.user == user
      errors.add(:base, I18n.t('errors.user_hisown_event'))
    end
  end

  def check_email_attachment
    if User.where(email: user_email).exists? 
      errors.add(:base, I18n.t('errors.existing_email'))
    end
  end
end
