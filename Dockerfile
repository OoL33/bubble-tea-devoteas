FROM ruby:2.7.3
RUN apt-get update -qq \
&& apt-get install -y curl build-essential libpq-dev \
 nodejs postgresql-client &&\
  curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y nodejs yarn
ADD . /app
WORKDIR /app
RUN bundle install
RUN yarn
# Copy the entrypoint script
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 3000
# Set the entrypoint script as the container's entrypoint
ENTRYPOINT ["/app/entrypoint.sh"]


# CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]