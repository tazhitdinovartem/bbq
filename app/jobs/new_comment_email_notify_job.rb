class NewCommentEmailNotifyJob < ApplicationJob
  queue_as :default

  def perform(event, comment, mail)
    EventMailer.comment(event, comment, mail).deliver_later
  end
end
