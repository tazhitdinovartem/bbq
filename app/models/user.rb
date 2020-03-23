class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: [:vkontakte]

  has_many :events, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :subscriptions, dependent: :destroy
  has_many :photos, dependent: :destroy
  
  validates :name, presence: true, length: { maximum: 35 }
  validates :email, uniqueness: true, presence: true, length: { maximum: 100 }

  before_validation :set_name, on: :create

  after_commit :link_subscriptions, on: :create

  mount_uploader :avatar, AvatarUploader

  def self.find_for_vkontakte_oauth(access_token)
    email = access_token.info.email
    user = where(email: email).first
  
    return user if user.present?
  
    provider = access_token.provider
    id = access_token.extra.raw_info.id
    url = "https://vk.com/#{id}"
  
    where(url: url, provider: provider).first_or_create! do |user|
      user.email = email
      user.password = Devise.friendly_token.first(16)
    end
  end

  private

  def send_devise_notification(notification, *args)
    devise_mailer.send(notification, self, *args).deliver_later
  end

  def set_name
    self.name = "User №#{rand(777)}" if self.name.blank?
  end

  def link_subscriptions
    Subscription.where(user_id: nil, user_email: self.email)
      .update_all(user_id: self.id)
  end
end
