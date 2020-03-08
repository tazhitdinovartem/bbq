# config valid for current version and patch releases of Capistrano
lock "~> 3.12.0"

set :application, "bbq"
set :user, "deploy"
set :repo_url, "git@github.com:tazhitdinovartem/bbq.git"

set :deploy_to, -> { "/home/#{fetch(:user)}/#{fetch(:application)}" }

append :linked_files, "config/database.yml", "config/master.key"

append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "vendor/bundle", "public/system", "public/uploads"

set :keep_releases, 5

