# Bubble Tea Devoteas

With this app, users are able to see shops and reviews for bubble tea shops around Boston, MA. Signed in users can create reviews, and admin roles can create shops.

This is a repository clone of [@Bubble Tea Devoteas](https://github.com/OoL33/bubble-tea-shop-reviews), reconfigured as a Docker image hosted through AWS EC2.

## Environment Variables

To run this project, you will need to add a .env file to the root of this project, and add the following environment variables

```
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=secret
DATABASE_URL=postgres://postgres:secret@db:5432/postgres
```

## Installation

Install bubble-tea-devoteas with bundler and yarn

```bash
cd bubble-tea-devoteas

yarn install

bundle install
```

## Run Locally

Clone this repository

```
git clone https://github.com/OoL33/bubble-tea-devoteas.git
```

Add Environment Variables

```
☝️☝️☝️ See Environment Variables ☝️☝️☝️
```

Install

```
☝️☝️☝️ See Installation ☝️☝️☝️
```

Create the Database

```bash
bundle exec rake db:create
```

Run Migrations

```bash
bundle exec rake db:migrate
```

Seed Database

```bash
bundle exec rake db:seed
```

If running bundle exec rake db:seed results in this error:

```
rake aborted!
ActiveRecord::NotNullViolation: PG::NotNullViolation: ERROR:  null value in column "user_id" of relation "reviews" violates not-null constraint
```

1. Drop the database

2. Re-create the database

3. Re-run database migrations

4. Re-run seed

These steps should resolve the error

Start the server

```bash
bundle exec rails s
```

## Run Locally (Docker Image)

This is the easiest way to run the app locally if you have linux/amd64 platform (aka not apple silicon)

Pull latest postgres image and app image

```
docker pull ool33/postgres:latest

docker pull ool33/bubble-tea-devoteas-web:latest
```

Run the app images and postgres images as containers

```
docker run --detach --name postgres -e POSTGRES_DB=postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=secret -p 5432:5432 ool33/postgres:latest

docker run --detach -e DATABASE_URL=postgres://postgres:secret@db:5432/postgres -p 3000:3000 --link postgres:db ool33/bubble-tea-devoteas-web:latest
```

## Docker

Run normal sequence of commands to test server can start locally. Check [localhost:3000](http://localhost:3000) and once verified it can start, you can Ctrl-C out of it.

    bundle exec rake db:drop

    bundle exec rake db:create

    bundle exec rails s

This project contains a DockerFile and a docker-compose.yml. Using these two files, you can create an image of the project using the following commands

Pull Docker dependencies

    docker-compose pull

Build image

    docker-compose build --no-cache

## Authors

- [@Alana Lee](https://github.com/OoL33)
- [@Karen Wong](https://github.com/kwong402)
- [@Katie Foley](https://github.com/katief906)
- [@Taylor Le](https://github.com/taylorkle)

## License

[MIT](https://choosealicense.com/licenses/mit/)

```
MIT License

Copyright (c) [2023] [Alana Lee, Karen Wong, Katie Foley, Taylor Le]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
