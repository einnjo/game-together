# Game Together Backend

Backend API for the Game Together application, built with the following technologies:

- [NestJS](http://nestjs.com/) web framework
- [Mikro-ORM](https://mikro-orm.io/) ORM
- [MongoDB](https://www.mongodb.com/) NoSQL database
- [Jest](https://jestjs.io/) Testing framework

## Dir Structure

```bash
.
├── README.md                   <-- You are here
│
├── .env                        <--  Runtime config, see required values below
│
├── src/                        <-- Source code
│   ├── features/               <-- Domain code
│   ├── views/                  <-- HTML templates
│
```

## Configuration

We use [Dotenv](https://github.com/motdotla/dotenv) to facilitate runtime configuration in development.
The **.env** file **MUST BE KEPT LOCAL** and not pushed to git as it may contain secrets.

Use the following sample to initialize your own .env file and make sure to place it alongside **package.json**.

```
X_MONGO_USER=value
X_MONGO_PASSWORD=value
X_MONGO_DB=value
X_MONGO_HOST=value
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
