source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.5'

gem 'rails', '~> 6.0.2', '>= 6.0.2.1'

gem 'puma', '~> 4.1'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'jbuilder', '~> 2.7'
gem 'devise'
gem 'devise-i18n'
gem 'simple_form', '~> 5.0', '>= 5.0.2'
gem 'rails-i18n'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'carrierwave'
gem 'rmagick'
gem 'fog-aws'
gem 'listen', '>=3.0.5', '<3.2'
gem 'sqlite3', '~> 1.4'
gem 'sendgrid-ruby'
gem 'pundit'
gem 'resque'
gem 'omniauth'
gem 'omniauth-vkontakte'

group :production do
  gem 'pg'
end

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'letter_opener'
  gem 'factory_bot_rails'
  gem 'rspec-rails'
  gem 'shoulda-matchers'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'capistrano', '~> 3.8'
  gem 'capistrano-rails', '~> 1.2'
  gem 'capistrano-passenger', '~> 0.2'
  gem 'capistrano-rbenv', '~> 2.1'
  gem 'capistrano-bundler', '~> 1.2'
  gem 'capistrano-resque'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
