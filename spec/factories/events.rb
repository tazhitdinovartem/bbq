FactoryBot.define do
  factory :event do
    association :user
    title { 'Some Event' }
    description { 'Some description for the event'}
    address { 'Chelyabinsk' }
    datetime { Time.parse('19.03.2020 12:00') }
  end
end