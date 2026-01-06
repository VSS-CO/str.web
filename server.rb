# frozen_string_literal: true
require 'sinatra'
require 'sassc'

set :public_folder, 'dist'
set :port, 4567

# Compile SCSS to CSS dynamically
get '/css/main.css' do
  scss = File.read('styles/main.scss')
  engine = SassC::Engine.new(scss, syntax: :scss, style: :compressed)
  content_type 'text/css'
  engine.render
end

# Serve main index
get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

# Serve any JS files from src/ via dist/
get '/main.js' do
  content_type 'application/javascript'
  File.read('src/main.js')
end

get %r{/src/(.+\.js)} do |file|
  content_type 'application/javascript'
  File.read("src/#{file}")
end
