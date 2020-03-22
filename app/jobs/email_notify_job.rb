class EmailNotifyJob < ApplicationJob
  queue_as :default
  def perform(type, event, arg, mail = nil)
    case type
    when 'comment'
      EventMailer.comment(event, arg, mail).deliver_later
    when 'photo'
      EventMailer.photo(event, arg, mail).deliver_later
    when 'subscription'
      EventMailer.subscription(event, arg).deliver_later
    end
  end
end
