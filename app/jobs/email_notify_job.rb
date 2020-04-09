class EmailNotifyJob < ApplicationJob
  queue_as :default
  def perform(obj)

    all_emails = (obj.event.subscriptions.map(&:user_email) + [obj.event.user.email]).uniq
    all_emails -= [obj.user.email] if obj.user.present?

    case obj
    when Comment
      all_emails.each do |email|
        EventMailer.comment(obj.event, obj, email).deliver_later
      end

    when Photo
      all_emails.each do |email|
        EventMailer.photo(obj.event, obj, email).deliver_later
      end

    when Subscription
      EventMailer.subscription(obj.event, obj).deliver_later
    end
  end
end
