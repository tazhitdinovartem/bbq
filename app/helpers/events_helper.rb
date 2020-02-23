module EventsHelper
  def is_user_subscribed?(event)
    event.subscribers.include?(current_user)
  end
end
