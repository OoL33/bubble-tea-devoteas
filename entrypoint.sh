#!/bin/bash

# Perform any necessary setup before running the application
bundle install --jobs "$(nproc)"  # Install dependencies
bundle exec rails db:create       # Create the database
bundle exec rails db:migrate      # Run migrations
bundle exec rails db:seed

# Start the application
bundle exec rails server -b 0.0.0.0
