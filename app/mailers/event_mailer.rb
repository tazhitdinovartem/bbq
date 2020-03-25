class EventMailer < ApplicationMailer
  EMAIL_SENDER = "BbqParty <admin@bbqparty.site>"

  def subscription(event, subscription)
    @email = subscription.user_email
    @name = subscription.user_name
    @event = event

    mail to: event.user.email,
	  from: EMAIL_SENDER,
    subject: "#{t("event_mailer.mail_subject.subscribe_subject")} #{event.title}"
  end

  def comment(event, comment, emails)
    @comment = comment
    @event = event

    mail to: emails,
	  from: EMAIL_SENDER, 
    subject: "#{t("event_mailer.mail_subject.comment_subject")} #{event.title}"
  end

  def photo(event, photo, emails)
    @event = event
    @photo = photo

    mail to: emails,
	  from: EMAIL_SENDER, 
    subject: "#{t("event_mailer.mail_subject.photo_subject")} #{event.title}"
  end
end
