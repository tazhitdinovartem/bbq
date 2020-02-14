module ApplicationHelper
  def user_avatar(user)
    asset_path('user.png')
  end

  def fa_icon(icon_class)
    content_tag 'span', '×', class: "fa fa-#{icon_class}"
  end

  def flash_class(level)
    case level
      when 'info' then "alert alert-info"
      when 'notice','success' then "alert alert-success"
      when 'error' then "alert alert-danger"
      when 'alert' then "alert alert-warning"
    end
  end
end
