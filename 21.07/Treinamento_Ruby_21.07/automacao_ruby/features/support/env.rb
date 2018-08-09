#O método require mais comumente usado carrega qualquer arquivo fornecido apenas uma vez
require 'capybara/cucumber'
require 'selenium-webdriver'
require 'capybara'
require 'rspec'

#
Capybara.register_driver :selenium do |app|
    #
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

Capybara.default_driver = :selenium
Capybara.default_max_wait_time = 60