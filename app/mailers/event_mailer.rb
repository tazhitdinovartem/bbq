class EventMailer < ApplicationMailer

  def subscription(event, subscription)
    @email = subscription.user_email
    @name = subscription.user_name
    @event = event

    mail to: event.user.email, subject: "Новая подписка на #{event.title}"
  end

  def comment(event, comment, email)
    @comment = comment
    @event = event

    mail to: email, subject: "Новый комментарий в #{event.title}"
  end

  def photo(event, photo, email)
    @event = event
    @photo = photo
    attachments.inline["#{@photo.photo}"] = File.read("#{Rails.root}/public/#{@photo.photo}")
    
    mail to: email, subject: "Добавлена фотография в #{event.title}"
  end
end
