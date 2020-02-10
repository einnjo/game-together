# Game Together

A sample full stack web application written in Typescript using Node.js, React, and the following tech stack:

- [NestJS](http://nestjs.com/) web framework
- [Mikro-ORM](https://mikro-orm.io/) ORM
- [MongoDB](https://www.mongodb.com/) NoSQL database
- [Jest](https://jestjs.io/) Testing framework
- [React](https://mozilla.github.io/nunjucks/) Frontend view engine
- [Next.js](https://nextjs.org/) React framework

It supports the following use cases:

- Users can post classifieds looking for other players to join their games.
- Users can remove their own classifieds.
- Users can comment on classifieds.
- Users can remove their own comments.
- Users can filter classifieds in order to refine their query.

Important design decisions:

- Frontend and backend is split.
- No accounts. Users are identified via anonymous sessions.
- Classifieds are deleted after 24hrs of existence.
- Minimalistic and lightweight UI inspired by:
  - [Craigslist](https://www.craigslist.org/about/sites)
  - [Pinboard](https://pinboard.in/)
  - [Hacker News](https://news.ycombinator.com/)
  - [Reddit (before the redesign)](https://old.reddit.com)

## Frontend source

[See frontend folder](frontend/README.md)

## Backend source

[See backend folder](backend/README.md)
