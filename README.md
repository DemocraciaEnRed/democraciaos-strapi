# DemocraciaOS build of Strapi CMS

A quick description of your strapi application

Build this as

```
$ docker build -t 'democraciaenred/democraciaos-strapi:test' .
```
When using in docker-compose, try this:

```yaml
version: '3'

services:
  strapi:
    image: democraciaenred/democraciaos-strapi:test
    environment:
      NODE_ENV: development
      # NODE_ENV=production
      DATABASE_CLIENT: mongo
      DATABASE_NAME: strapi-db
      DATABASE_HOST: mongo
      DATABASE_PORT: 27017
      DATABASE_USERNAME: 
      DATABASE_PASSWORD:
      MAILER_HOST: smtp.mailtrap.io
      MAILER_PORT: 2525
      MAILER_USERNAME: 
      MAILER_PASSWORD: 
      MAILER_FROM: email@email.com
      MAILER_REPLY_TO: email@email.com
      MAILER_REJECT_UNAUTHORIZED: 'false'
      MAILER_REQUIRE_TLS: 'false'
      MAILER_SECURE: 'false'
      ADMIN_JWT_SECRET: some-32-number-and-lowercase-random-string
    volumes:
      - ./app:/srv/app
    ports:
      - '1337:1337'
    depends_on:
      - mongo

  mongo:
    image: mongo:3.6
    environment:
      MONGO_INITDB_DATABASE: strapi-db
    volumes:
      - ./data:/data/db
```

**NOTE:** Running the container of strapi with `NODE_ENV=production` you wont be able to create other content types. 

## What needs to be persisted

- Folder `api`, folder `public/uploads` (or just `/public`) and of course, the database.