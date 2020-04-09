class EmailNotifyJob < ApplicationJob
  queue_as :default
  def perform(event, obj, email = nil)
    case obj
    when Comment
      EventMailer.comment(event, obj, email).deliver_later
    when Photo
      EventMailer.photo(event, obj, email).deliver_later
    when Subscription
      EventMailer.subscription(event, obj).deliver_later
    end
  end
end
