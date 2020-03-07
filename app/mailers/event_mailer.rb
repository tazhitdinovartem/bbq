class EventMailer < ApplicationMailer

  def subscription(event, subscription)
    @email = subscription.user_email
    @name = subscription.user_name
    @event = event

    mail to: event.user.email,
	  from: "BbqParty <admin@bbqparty.site>",
    subject: "#{t("event_mailer.mail_subject.subscribe_subject")} #{event.title}"
  end

  def comment(event, comment, email)
    @comment = comment
    @event = event

    mail to: email,
	  from: "BbqParty <admin@bbqparty.site>", 
    subject: "#{t("event_mailer.mail_subject.comment_subject")} #{event.title}"
  end

  def photo(event, photo, email)
    @event = event
    @photo = photo

    mail to: email,
	  from: "BbqParty <admin@bbqparty.site>", 
    subject: "#{t("event_mailer.mail_subject.photo_subject")} #{event.title}"
  end
end
