class EmailNotifyJob < ApplicationJob
  queue_as :default
  def perform(event, obj, emails = nil)
    case obj
    when Comment
      EventMailer.comment(event, obj, emails).deliver_later
    when Photo
      EventMailer.photo(event, obj, emails).deliver_later
    when Subscription
      EventMailer.subscription(event, obj).deliver_later
    end
  end
end
