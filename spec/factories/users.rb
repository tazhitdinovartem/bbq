FactoryBot.define do
  factory :user do
    name { "User_#{rand(100)}" }
    sequence(:email) { |e| "useremail#{e}@mail.ru" }
    after(:build) { |u| u.password_confirmation = u.password = "123456" }
  end
end