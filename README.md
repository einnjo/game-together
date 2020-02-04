# Game Together

A sample full stack web application written in Typescript using Node.js and the following tech stack:

- [NestJS](http://nestjs.com/) web framework
- [Mikro-ORM](https://mikro-orm.io/) ORM
- [MongoDB](https://www.mongodb.com/) NoSQL database
- [Jest](https://jestjs.io/) Testing framework
- [Nunjucks](https://mozilla.github.io/nunjucks/) Template rendering

It supports the following use cases:

- Users can post classifieds looking for other players to join their games.
- Users can remove their own classifieds.
- Users can comment on classifieds.
- Users can remove their own comments.
- Users can filter classifieds in order to refine their query.

Important design decisions:

- No accounts. Users are identified via anonymous sessions.
- Classifieds are deleted after 24hrs of existence.
- Minimalistic and lightweight UI inspired by:
  - [Craigslist](https://www.craigslist.org/about/sites)
  - [Pinboard](https://pinboard.in/)
  - [Hacker News](https://news.ycombinator.com/)
  - [Reddit (before the redesign)](https://old.reddit.com)

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
